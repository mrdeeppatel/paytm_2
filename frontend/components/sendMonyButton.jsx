import { replace, useNavigate } from "react-router-dom"

const SendMoneyButton = ({ userEmail }) => {
    const navigate = useNavigate()
    return <>
        <div>

            <button className="bg-blue-200 border-2 p-2 h-fit rounded-2xl cursor-pointer" onClick={() => {
                // alert(`SendMoney to ${userEmail}`)
                navigate("/transfer?id=" + userEmail)
            }}>Send Money </button><br />
            {/* {userEmail} */}
        </div>
    </>
}


export {
    SendMoneyButton
}