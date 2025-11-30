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

    }).catch((err) => {

        console.log(err.response.data)

    })
}


export {
    signInApi,
    signUpApi
}