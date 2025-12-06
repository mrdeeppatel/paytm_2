const mongoose = require("mongoose")
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;
// console.log(mongoURL)


const connectToDb = async () => {
    await mongoose.connect(mongoURL).then(() => {
        console.log("\nPASS -> Connected to MongoDB :)")
    }).catch((err) => {
        console.log("\nERROR While Connecting :(")
        console.log("\nERROR -> " + err)
    })
}

connectToDb()

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true }
})

const accountSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    balance: { type: Number, required: true }
})
// console.log(userSchema)

const User = mongoose.model("Usre", userSchema)
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account
}