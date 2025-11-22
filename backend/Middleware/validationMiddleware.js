const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")


const userMiddleware = (req, res, next) => {

    // Harkirat did the commented way
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     return res.status(403).json({})
    // }
    if (!req.headers.token) {
        return res.status(403).json({

            Error: "No Token in Header",
            Error_At: "validationMiddleware.js -> userMiddleware",
        })
    }

    const result = req.headers.token.split(" ")

    if (result[0] != "Bearer") {

        return res.status(403).json({
            MSG: "Token is invalid",
            Error: `Token Type is not "Bearer"`,
            Error_At: "validationMiddleware.js -> userMiddleware",

        })
    }

    try {
        jwt.verify(result[1], JWT_SECRET)

    } catch (error) {
        return res.status(403).json({
            MSG: "Invalid token ",
            Error_IN: "validationMiddleware.js -> userMiddleware"
        })
    }

    const email = jwt.decode(result[1])["email"]

    console.log(email)
    if (!email) {
        return res.status(403).json({
            MSG: "Token Has No email ",
            Error_IN: "validationMiddleware.js -> userMiddleware"
        })
    }

    //this middleware is used while updating the user data
    //and if the user wants to update email the  request body will have email field
    //but here we are updating the email field in request body to tokens email
    //So the email gets overwriten 
    // req.body["email"] = email

    req.body["tokenEmail"] = email

    next()

}

module.exports = {
    userMiddleware
}