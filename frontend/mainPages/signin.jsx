import { useState } from "react"
import { Card } from "../components/card"
import { InputBoxEmail, InputBoxPassword } from "../components/inputBox"
import { MainHeading } from "../components/mainHeading"


const SignIn = () => {

    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    console.log(email)
    console.log(password)
    return (
        <div className="flex justify-center items-center h-screen ">
            <Card >
                <div className="flex flex-col  ">

                    <MainHeading mainHeadingText={"SignIn Component"} subHeadingText={"Signin Main Page"} />
                    {/* <SubHeading subText={"Signin Main Page"} /> */}
                    <div className="my-5 " >
                        <InputBoxEmail subHeading={"johndoe@example.com"} mainHeading={"Email Address"} useEmail={useEmail} />
                        <InputBoxPassword subHeading={"********"} mainHeading={"Password"} usePassword={usePassword} />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className=" my-5 cursor-pointer hover:bg-[#2A2A2A]  border w-4/6 p-3 text-white bg-[#212121]"
                            onClick={() => { console.log("Clicked on Signin") }}>
                            SignIn</button>
                    </div>

                </div>
            </Card>
        </div>)
}

export {

    SignIn
}