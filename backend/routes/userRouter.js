const express = require("express")
const { User, Account } = require("../data/db")
const { JWT_SECRET } = require("../config")
const { signupValidation, signInValidation, updateValidation } = require("../Middleware/zod")
const jwt = require("jsonwebtoken")
const { userMiddleware } = require("../Middleware/validationMiddleware")


// jsonwebtoken
userRouter = express.Router()



userRouter.post("/signup", async (req, res, next) => {

    // we can access data from request object by using both method
    // const fname = req.body.["fname"]
    const firstName = req.body.firstName
    const email = req.body.email
    const password = req.body.password

    const result = signupValidation.safeParse({ firstName, email, password })

    if (!result.success) {
        return res.status(411).json({
            MSG: "The Given User Credentials are not valid ",
            Error_IN: "userRouter.js -> userRouter.post/signup "
        })

    }
    // Finding if user exist or not
    // it will return a user document if found 
    const doesExist = await User.findOne({
        email
    })

    if (doesExist) {
        return res.status(411).json({
            MSG: "User Already Exist ",
            Error_IN: "userRouter.js -> userRouter.post/signup "
        })
    }

    // Creating a user
    const val = await User.create({
        firstName,
        email,
        password
    })
    // console.log(val)
    await Account.create({
        _id: val._id,
        email,
        balance: (Math.floor(Math.random() * 500)) + 500 // random between 500 to 1000
    })

    res.json({
        MSG: "User and Acoount Created"
    })

})

userRouter.post("/signin", async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    //This will work to get single elements
    // console.log("Header - ", req.header("firstName"))

    // Headers elements names are automaticaty gets converted in small case 
    // So headers.Type -> headers.type
    const result = signInValidation.safeParse({ email, password })

    if (!result.success) {
        return res.status(411).json({
            MSG: "The Given User Credentials are not valid ",
            Error_IN: "userRouter.js -> userRouter.post/signin "
        })

    }
    const doesExist = await User.findOne({
        email,
        password
    })

    // console.log(doesExist)
    if (!doesExist) {

        return res.status(403).json({
            MSG: "Error while logging",
            Error: "User name or pass are incorrect",
            Error_IN: "userRouter.js -> userRouter.post/signin"
        })
    }

    const token = jwt.sign({ email }, JWT_SECRET)
    console.log(token)

    // const result = jwt.verify(token, JWT_SECRET, (err) => {

    //     res.json({
    //         MSG: "Invalid token ",
    //         Error_IN: "userRouter.js -> userRouter.post/signin"
    //     })
    //     return
    // })

    try {
        jwt.verify(token, JWT_SECRET)

    } catch (error) {
        return res.status(403).json({
            MSG: "Invalid token ",
            Error_IN: "userRouter.js -> userRouter.post/signin"
        })
    }

    res.json({
        MSG: "Login Successful",
        token: "Bearer " + token
    })

})

//To Check Token
userRouter.use(userMiddleware)

userRouter.get("/userdetails", async (req, res) => {

    const email = req.tokenEmail
    const userDetails = await User.findOne({
        email
    })

    if (!userDetails) {

        return res.status(403).json({
            MSG: "Error while getting user Details",
            Error: "Incoorect email in token",
            Error_IN: "userRouter.js -> userRouter.get/userdetails"
        })
    }
    res.json({
        MSG: "User Details",
        userDetails: {
            firstName: userDetails.firstName,
            email: userDetails.email

        }
    })

})

userRouter.put("/user", async (req, res) => {
    //IF WE ARE UPDATING THE email WE NEED TO GENRATE NEW JWT TOKEN FOR THAT
    //Because old token will have old email
    //and the middleware will decode the token and will add old email to request
    //so from there the we fill perform operations on old email
    //like finding the user and updating but the find() will get old email
    const result = updateValidation.safeParse(req.body)

    if (!result.success) {
        return res.status(411).json({
            MSG: "The Given User Credentials are not valid ",
            Error_IN: "userRouter.js -> userRouter.put/user "
        })

    }
    const val = await User.updateOne({ "email": req.tokenEmail }, req.body)

    // if body have email that meanse the email got updated
    // So creating a new token 
    if (req.body.email) {
        const token = jwt.sign({ "email": req.body.email }, JWT_SECRET)

        return res.json({
            MSG: "Values got updated",
            "newToken": token,
            "Body": req.body,
            "result": val

        })

    }

    res.json({
        MSG: "Values got updated",
        "Body": req.body,
        "result": val

    })


})

// Search user bases on user name
userRouter.get("/bulk", async (req, res) => {

    //There should be a token check for the user 
    //If the user is valid or not using token  

    // If threis a filter or else empty string

    const filter = req.query.filter || ""
    console.log(filter)
    // $options : i means case insencetive
    const result = await User.find({

        '$or': [

            { firstName: { '$regex': `^${filter}`, '$options': 'i' } },
            { email: { '$regex': `^${filter}`, '$options': 'i' } }],
        email: { "$ne": req.tokenEmail }

    }
    )

    console.log(req.tokenEmail)
    res.json({
        data: result.map(user => ({

            email: user.email,
            firstName: user.firstName,
            _id: user._id

        }))
    })
})


userRouter.post("/check", (req, res) => {

    res.json({
        MSG: "Token is valid",
        "Email": req.tokenEmail
    })
})
module.exports = { userRouter }