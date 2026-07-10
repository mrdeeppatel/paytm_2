const express = require("express")
const mongoose = require("mongoose")
const { Account } = require("../data/db")
const { userMiddleware } = require("../Middleware/validationMiddleware")
accountRouter = express.Router()


accountRouter.use(userMiddleware)

accountRouter.get("/balance", async (req, res) => {

    const email = req.body.email


    const userAccount = await Account.findOne({
        email
    })
    if (!userAccount) {
        return res.status(411).json({
            MSG: "User Bank Account Not found"
        })
    }
    res.json({
        MSG: "User Bank Account Found",
        balance: userAccount.balance
    })
})

accountRouter.post("/transfer", async (req, res) => {

    const transferFrom = req.tokenEmail
    const transferTo = req.body.transferTo
    const amount = req.body.amount



    // transferFund("2@gmail.com", "1@gmail.com", 100)
    // transferFund("4@gmail.com", "3@gmail.com", 100)

    const result = await transferFund(transferTo, transferFrom, amount)

    console.log(result)
    if (result.success) {
        res.json({
            MSG: "Transfer successful"
        })
    } else {
        res.status(411).json({
            MSG: result.MSG
        })
    }
})


const transferFund = async (transferTo, transferFrom, transferAmount) => {

    const session = await mongoose.startSession()

    try {

        session.startTransaction()


        // IT will find the user based on email and checjk if balance is sufficient then it wull return the sender or not
        // const senderAcc = await Account.findOne({ email: transferFrom , balance:{ $gte : transferAmount }})

        const senderAcc = await Account.findOne({ email: transferFrom }).session(session)
        const reciverAcc = await Account.findOne({ email: transferTo }).session(session)

        if (!senderAcc) {
            console.log("Sender Not found -> accountRought -> transferFund")
            return {
                success: false,
                MSG: "Sender Not found -> accountRought -> transferFund"
            }
        }
        if (!reciverAcc) {
            console.log("Reciver Not found -> accountRought -> transferFund")
            return {
                success: false,
                MSG: "Reciver Not found -> accountRought -> transferFund"
            }
        }


        if (transferAmount <= 0) {
            return {
                success: false,
                MSG: "Transfer amount cann't be negative or zero"
            }
        }

        if (senderAcc.balance < transferAmount) {
            // console.log(senderAcc)
            // console.log(transferAmount)
            console.log("Sender Dont have enough money to transfer")
            return {
                success: false,
                MSG: "Sender Dont have enough money to transfer"
            }
        }


        //Transfering the Money
        console.log("---Transaction Started---")

        // we can ensure that ballance never goes negative 
        // we can find the sernder from database with the condition "&gte"
        // it will fint the user by email and then compare the balance if it is greater or same


        //IT will find the user based on email and checjk if balance is sufficient then it wull update the balance
        //
        // await Account.findOneAndUpdate(
        //     { email: transferFrom, balance: { $gte : transferAmount } },
        //     { $inc: { balance: -transferAmount } },
        //     { session }
        // )


        const sender = await Account.findOneAndUpdate(
            {
                email: transferFrom,
                balance: { $gte: transferAmount }
            },
            { $inc: { balance: -transferAmount } },
            { session, new: true }
        )
        if (!sender) {
            throw new Error("Insufficient balance");
        }

        await Account.findOneAndUpdate(
            { email: transferTo },
            { $inc: { balance: transferAmount } },
            { session }
        )
        console.log("---Transaction Ended---")
        await session.commitTransaction()

        console.log("---Transaction Committed---")

        return {
            success: true
        }
    } catch (err) {
        await session.abortTransaction()
        console.log(err)
        return {
            success: false,
            MSG: "Error in Transection"
        }
    } finally {
        session.endSession();
    }

}

// transferFund("1@gmail.com","2@gmail.com",100)
// transferFund("1@gmail.com","2@gmail.com",100)
module.exports = { accountRouter }