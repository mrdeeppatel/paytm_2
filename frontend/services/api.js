import axios from "axios"
import { getToken } from "../haplers/haplerFunctions"



const signInApi = async ({ email, password }) => {

    axios.post("http://localhost:3000/api/v1/user/signin", {
        email,
        password
    }).then((res) => {

        if (res.data.token) {
            document.cookie = `token=${res.data.token}`
            //doesn't add link to history and uses can not go back using back button
            // window.location.replace("http://localhost:5173/home")

            // Adds the link to the history and user can go back to the privious page using back button
            window.location.href = "http://localhost:5173/home"

        }
    }).catch((err) => {
        alert(err.response.data.MSG)

    })

}

const signUpApi = ({ firstName, email, password }) => {

    axios.post("http://localhost:3000/api/v1/user/signup", {
        firstName,
        email,
        password
    }).then((res) => {

        //Replacing this signup page with signin page 
        window.location.replace("http://localhost:5173/signin")

    }).catch((err) => {

        alert(err.response.data.MSG)

    })
}

const getUserDetails = async ({ setUserDetails }) => {
    const token = getToken().split(" ")[1]

    if (!token) {
        alert("No Token <-> api.js")
        return
    }

    axios.get("http://localhost:3000/api/v1/user/userdetails", {
        "headers": {
            "token": "Bearer " + token
        }
    }).then(res => {
        setUserDetails(res.data.userDetails)
    })
}
const getAllUserApi = async ({ setUserList, filter }) => {

    const token = getToken().split(" ")[1]

    if (!token) {
        alert("Signin again")
        return
    }
    await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        "headers": {
            "token": "Bearer " + token
        }
    }).then(res => {
        setUserList(res.data.data)

    }).catch(err => {
        alert(err.response.data.MSG)
    })

}

const transferMoney = async ({ transferTo, amount }) => {

    const token = getToken().split(" ")[1]

    await axios.post("http://localhost:3000/api/v1/account/transfer", {
        transferTo,
        amount

    }, {
        "headers": {
            "token": "Bearer " + token
        }
    }).catch((err) => {

        alert(err.response.data.MSG)
    }).then((res) => {
        alert(res.data.MSG)
    })
}

export {
    signInApi,
    signUpApi,
    getAllUserApi,
    getUserDetails,
    transferMoney
}