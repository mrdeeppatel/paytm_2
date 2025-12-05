import { useState } from "react"
import { Card } from "../components/card"
import { InputBoxPassword, InputBox } from "../components/inputBox"
import { MainHeading } from "../components/mainHeading"
import { signUpApi } from "../services/api"


const SignUp = () => {

    const [firstName, useFristName] = useState("")
    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    const [confirmPassword, useConfirmPassword] = useState("")

    return (
        <div className="flex justify-center items-center h-screen ">
            <Card >
                <div className="flex flex-col  w-2xl ">

                    <MainHeading mainHeadingText={"SignUp Component"} subHeadingText={"SignUp Main Page"} />

                    <div className="my-5 " >
                        <InputBox subHeading={"john"} mainHeading={"First Name"} useEmail={useFristName} />
                        <InputBox subHeading={"johndoe@example.com"} mainHeading={"Email Address"} useEmail={useEmail} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Password"} usePassword={usePassword} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Confirm Password"} usePassword={useConfirmPassword} />
                    </div>
                    <div className="flex justify-center ">

                        <button className=" my-5 cursor-pointer hover:bg-[#2A2A2A] border w-4/6 p-3 text-white bg-[#212121]"
                            onClick={() => {

                                if (password.trim() != confirmPassword.trim()) {
                                    alert("Password Not Same")
                                    return
                                }

                                signUpApi({ firstName, email, password })
                            }}>
                            SignUp</button>

                    </div>
                    <div className="flex justify-center py-3">
                        <p className="w-4/6 px-1">Already a user? <u>

                            <a href="http://localhost:5173/signin">
                                click here
                            </a>

                        </u></p>
                    </div>

                </div>
            </Card>
        </div>
    )
}
export {
    SignUp
}