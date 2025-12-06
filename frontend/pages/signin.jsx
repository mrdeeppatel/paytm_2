import { useState } from "react"
import { Card } from "../components/card"
import { InputBox, InputBoxPassword } from "../components/inputBox"
import { MainHeading } from "../components/mainHeading"
import { signInApi } from "../services/api"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    return (
        <div className="flex justify-center items-center h-screen ">
            <Card >
                <div className="flex flex-col  w-2xl">

                    <MainHeading mainHeadingText={"SignIn Component"} subHeadingText={"Signin Main Page"} />
                    {/* <SubHeading subText={"Signin Main Page"} /> */}
                    <div className="my-5 " >
                        <InputBox subHeading={"johndoe@example.com"} mainHeading={"Email Address"} useEmail={useEmail} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Password"} usePassword={usePassword} />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className=" my-5 cursor-pointer hover:bg-[#2A2A2A]  border w-4/6 p-3 text-white bg-[#212121]"
                            onClick={() => { signInApi({ email, password, navigate }) }}>
                            SignIn</button>
                    </div>


                    <div className="flex justify-center py-3 ">
                        <button className=" flex w-4/6 px-1 cursor-pointer " onClick={() => {
                            navigate("/signup")
                        }}>Not a user?<u>click here</u></button>
                    </div>
                </div>
            </Card>
        </div>)
}

export {

    SignIn
}