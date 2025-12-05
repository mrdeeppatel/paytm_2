import { SendMoneyButton } from "./sendMonyButton"

const Users = ({ userList, setFilter }) => {


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

                    return <div className="flex justify-between pr-20" key={e.email}>

                        <div className="flex items-center gap-x-2 my-4">
                            <p className="flex border-2 rounded-full justify-center items-center h-8 w-8 ">{e.email[0]}</p>
                            <p className="felx items-center">{e.email}</p>
                            <p className="felx items-center">{e.firstName}</p>
                        </div>
                        <SendMoneyButton userEmail={e.email} />
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