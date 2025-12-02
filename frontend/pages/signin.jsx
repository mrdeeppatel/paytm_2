import { useState } from "react"
import { Card } from "../components/card"
import { InputBox, InputBoxPassword } from "../components/inputBox"
import { MainHeading } from "../components/mainHeading"
import { signInApi } from "../services/api"


const SignIn = () => {

    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    console.log(email)
    console.log(password)
    return (
        <div className="flex justify-center items-center h-screen ">
            <Card >
                <div className="flex flex-col ">

                    <MainHeading mainHeadingText={"SignIn Component"} subHeadingText={"Signin Main Page"} />
                    {/* <SubHeading subText={"Signin Main Page"} /> */}
                    <div className="my-5 " >
                        <InputBox subHeading={"johndoe@example.com"} mainHeading={"Email Address"} useEmail={useEmail} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Password"} usePassword={usePassword} />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className=" my-5 cursor-pointer hover:bg-[#2A2A2A]  border w-4/6 p-3 text-white bg-[#212121]"
                            onClick={() => { signInApi({ email, password }) }}>
                            SignIn</button>
                    </div>
                    <input onKeyDown={e => {
                        if (e.key === "Enter") {
                            console.log("Enter")
                        }
                    }} />

                    <div className="flex justify-center py-3">
                        <p className="w-4/6 px-1">Not a user?
                            <u><a href="http://localhost:5173/signup">click here</a></u>
                        </p>
                    </div>
                </div>
            </Card>
        </div>)
}

export {

    SignIn
}