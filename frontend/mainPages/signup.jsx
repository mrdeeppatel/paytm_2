import { useState } from "react"
import { Card } from "../components/card"
import { InputBoxPassword, InputBoxEmail } from "../components/inputBox"
import { MainHeading } from "../components/mainHeading"


const SignUp = () => {

    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    const [confirmPassword, useConfirmPassword] = useState("")
    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    return (
        <div className="flex justify-center items-center h-screen ">
            <Card >
                <div className="flex flex-col  ">

                    <MainHeading mainHeadingText={"SignUp Component"} subHeadingText={"SignUp Main Page"} />

                    <div className="my-5 " >
                        <InputBoxEmail subHeading={"johndoe@example.com"} mainHeading={"Email Address"} useEmail={useEmail} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Password"} usePassword={usePassword} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Confirm Password"} usePassword={useConfirmPassword} />
                    </div>
                    <div className="flex justify-center ">

                        <button className=" my-5 cursor-pointer hover:bg-[#2A2A2A] border w-4/6 p-3 text-white bg-[#212121]"
                            onClick={() => { console.log("Clicked on Signin") }}>
                            SignUp</button>

                    </div>
                </div>
            </Card>
        </div>
    )
}
export {
    SignUp
}