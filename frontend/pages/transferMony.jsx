import { useEffect, useState } from "react"
import { MainHeading } from "../components/mainHeading"
import { transferMoney } from "../services/api"
import { useNavigate } from "react-router-dom"
const TransferMoney = () => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState(0)

    if (!(amount.toString().match(/^\d+$/))) {
        setAmount(0)
    }
    const params = new URLSearchParams(window.location.search)

    // If URL doesn't have id parameter then redirect the user to home page
    useEffect(() => {
        if (!params.has("id") || !(/^[^\s@]+@[^\s@0-9]+\.[^\s@0-9]+$/.test(params.get("id")))) {
            // window.location.replace("http://localhost:5173/")
            navigate("/home")
        }
    }, [])

    return <>
        <div className="flex justify-around items-center h-screen bg-amber-100">

            <div className="w-2/6  flex-col items-center border-2 p-4 bg-green-200">
                <MainHeading mainHeadingText={"Send Money"} subHeadingText={"LOCO Pay"} />

                <div className=" px-4">

                    <div className="flex gap-2 items-center py-2">
                        <p className="w-1/12 h-10 flex  items-center justify-center text-xl font-bold rounded-full border-2">{params.get("id")[0]}</p>
                        <p className=" font-medium text-xl">{params.get("id")}</p>
                    </div>
                    <div>
                        <p>Amount To Send</p>
                        <input value={amount} type="number" id="" className="border px-1 w-4/6" onChange={(event) => {

                            setAmount(event.target.value)
                        }} />
                    </div>
                    <div className="flex justify-between">

                        <button className="mt-8 bg-gray-300 text-xl border-2 px-2 cursor-pointer rounded-2xl" onClick={() => {
                            transferMoney({ amount, transferTo: params.get("id") })
                        }}>Send</button>
                        <button className="mt-8 bg-gray-300 text-xl border-2 px-2 cursor-pointer rounded-2xl" onClick={() => {
                            // window.location.replace("http://localhost:5173/")
                            navigate("/")
                        }}>Back</button>
                    </div>
                </div>
            </div>
        </div >

    </>
}


export {
    TransferMoney
}