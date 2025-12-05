import { useState } from "react"
import { MainHeading } from "../components/mainHeading"


const TransferMoney = () => {
    const [amount, setAmount] = useState(0)
    console.log(amount)

    if (amount.toString().match(/^\d+$/)) {
        console.log("Number");
    } else {
        console.log("Not a Number");
        setAmount(0)
    }

    return <>
        <div className="flex justify-around items-center h-screen bg-amber-100">

            <div className="w-2/6  flex-col items-center border-2 p-4 bg-green-200">
                <MainHeading mainHeadingText={"Send Money"} subHeadingText={"LOCO Pay"} />

                <div className=" px-4">

                    <div className="flex gap-2 items-center py-2">
                        <p className="w-1/12 h-10 flex  items-center justify-center text-xl font-bold rounded-full border-2">F</p>
                        <p className=" font-medium text-xl">Friend's Name</p>
                    </div>
                    <div>
                        <p>Amount To Send</p>
                        <input value={amount} type="number" id="" className="border px-1 w-4/6" onChange={(event) => {

                            setAmount(event.target.value)
                        }} />
                    </div>
                </div>
            </div>
        </div>

    </>
}


export {
    TransferMoney
}