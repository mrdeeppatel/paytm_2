import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useCheckForToken = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const cookies = document.cookie.split(" ")
        let haveToken = false
        cookies.forEach((cookie) => {
            if (cookie.startsWith("token=")) {
                haveToken = true
            }
        })

        if (!haveToken) {
            // window.location.replace("http://localhost:5173/signin")
            navigate("/signin")
        }
    }, [])
}

export { useCheckForToken }
