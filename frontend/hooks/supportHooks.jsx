import { useEffect } from "react"


const useCheckForToken = () => {

    useEffect(() => {
        const cookies = document.cookie.split(" ")
        let haveToken = false
        cookies.forEach((cookie) => {
            if (cookie.startsWith("token=")) {
                haveToken = true
            }
        })

        if (!haveToken) {
            window.location.replace("http://localhost:5173/signin")
        }
    }, [])
}

export { useCheckForToken }
