const getToken = () => {

    //Will retun a list of all the cookies of this website
    const cookies = document.cookie.split(";")
    let token = undefined
    cookies.forEach((e) => {
        if (e.trim().startsWith("token=Bearer")) {

            token = e.trim().split("=")[1]
        }
    });
    return token
}


export {
    getToken
}
