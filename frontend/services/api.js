import axios from "axios"
import { getToken } from "../haplers/haplerFunctions"



const signInApi = async ({ email, password }) => {

    axios.post("http://localhost:3000/api/v1/user/signin", {
        email,
        password
    }).then((res) => {
        console.log("Response -> ")
        console.log(res.data)

        if (res.data.token) {
            alert("New token -> " + res.data.token)
            document.cookie = `token=${res.data.token}`
            //doesn't add link to history and uses can not go back using back button
            // window.location.replace("http://localhost:5173/home")

            // Adds the link to the history and user can go back to the privious page using back button
            window.location.href = "http://localhost:5173/home"

        }
    }).catch((err) => {
        console.log("ERROR -> ")
        console.log(err.response.data)

    })

}

const signUpApi = ({ firstName, email, password }) => {

    axios.post("http://localhost:3000/api/v1/user/signup", {
        firstName,
        email,
        password
    }).then((res) => {

        console.log(res.data)

        //Replacing this signup page with signin page 
        window.location.replace("http://localhost:5173/signin")

    }).catch((err) => {

        console.log(err.response.data)

    })
}

const getUserDetails = async ({setUserDetails}) => {
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
        console.log(res.data.userDetails)

    })
}
const getAllUserApi = async ({ setUserList, filter }) => {

    const token = getToken().split(" ")[1]

    if (!token) {
        alert("No Token <-> api.js")
        return
    }
    await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        "headers": {
            "token": "Bearer " + token
        }
    }).then(res => {
        console.log("Bulk uesr API response")

        setUserList(res.data.data)

    }).catch(err => {
        console.log("Error While calling Bulk user API")
        console.log(err.response.data)
    })

}

export {
    signInApi,
    signUpApi,
    getAllUserApi,
    getUserDetails
}