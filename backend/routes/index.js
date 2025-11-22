const express = require("express")

// We need tou do Object Destructuring
const { userRouter } = require("./userRouter")
const { accountRouter } = require("./accountRouter")


const router = express.Router()

router.use("/user", userRouter)
router.use("/account", accountRouter)

module.exports = router
