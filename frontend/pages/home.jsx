import { Ballance } from "../components/ballance"
import { Header } from "../components/header"
import { Users } from "../components/users"


const Home = () => {


    return <>
        <Header appName={"LocoPay"} userName={"Harkirat"} />
        <div className="mx-6">
        <Ballance ballance={"20,00,00,000"}/>
        <Users/>
        </div>
    </>
}

export {
    Home
}