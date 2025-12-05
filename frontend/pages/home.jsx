import { useEffect, useEffectEvent, useState } from "react"
import { Ballance } from "../components/ballance"
import { Header } from "../components/header"
import { Users } from "../components/users"
import { useCheckForToken } from "../hooks/supportHooks"
import { getAllUserApi, getUserDetails } from "../services/api"

const Home = () => {

    const [userDetails, setUserDetails] = useState({})
    const [filter, setFilter] = useState("")
    // API CALL FOR Usres List
    const [userList, setUserList] = useState([])
    useEffect(() => {

        getAllUserApi({ setUserList, filter })
        getUserDetails({ setUserDetails })

    }, [])

    //Debouncing the filter api call
    //until user stops typing
    useEffect(() => {
        const timer = setTimeout(() => {

            getAllUserApi({ setUserList, filter })
        }, 500)

        return () => {
            clearTimeout(timer)
        }

    }, [filter])


    useCheckForToken()
    return <>
        <Header appName={"LocoPay"} userName={userDetails.firstName ? userDetails.firstName : ""} />
        <div className="mx-6">
            <Ballance ballance={userDetails.balance ? userDetails.balance : ""} />
            <Users userList={userList} setFilter={setFilter} />
        </div>
    </>
}

export {
    Home
}