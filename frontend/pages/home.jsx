import { useEffect, useEffectEvent, useState } from "react"
import { Ballance } from "../components/ballance"
import { Header } from "../components/header"
import { Users } from "../components/users"
import { useCheckForToken } from "../hooks/supportHooks"
import { getAllUserApi } from "../services/api"


const Home = () => {
   
    useCheckForToken()
    return <>
        <Header appName={"LocoPay"} userName={"Harkirat"} />
        <div className="mx-6">
            <Ballance ballance={"20,00,00,000"} />
            <Users />
        </div>
    </>
}

export {
    Home
}