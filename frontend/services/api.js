import axios from "axios"



const signInApi = ({ email, password }) => {

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


export {
    signInApi,
    signUpApi
}