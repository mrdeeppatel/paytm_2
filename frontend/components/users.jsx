import { useEffect, useState } from "react"
import { data } from "react-router-dom"
import { getAllUserApi } from "../services/api"

const Users = () => {

    const [filter, setFilter] = useState("")
    // API CALL FOR Usres List
    const [userList, setUserList] = useState([])
    useEffect(() => {

        getAllUserApi({ setUserList, filter })
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





    return <>
        <div className=" border-2 my-3 rounded-2xl p-3">

            <div>
                <h2 className="text-3xl">Users</h2>
                <input className="mt-2 border-2 w-full border-gray-400 rounded-2xl px-2 p-1" type="text" placeholder="Enter Name..." onChange={e => {
                    setFilter(e.target.value)
                }} />
            </div>
            <div className="flex-col mt-4">
                {userList.map((e) => {

                    return <div className="flex items-center gap-x-2 my-4" key={e.email}>
                        <p className="flex border-2 rounded-full justify-center items-center h-8 w-8 ">{e.email[0]}</p>
                        <p className="felx items-center">{e.email}</p>
                        <p className="felx items-center">{e.firstName}</p>
                    </div>
                }
                )}
            </div>
        </div>
    </>
}
export {
    Users
}