import { data } from "react-router-dom"

const Users = () => {

    // API CALL FOR Usres List
    const data = [
        {
            "email": "1@gmail.com",
            "firstName": "dasad1",
            "_id": "691c3bb9d766a6c505e964c5"
        },
        {
            "email": "2@gmail.com",
            "firstName": "dasad1",
            "_id": "691c3bc0d766a6c505e964ca"
        },
        {
            "email": "3@gmail.com",
            "firstName": "dasad1",
            "_id": "691e60613bd3de6d9fd3ad5b"
        },
        {
            "email": "4@gmail.com",
            "firstName": "dasad1",
            "_id": "691e606f3bd3de6d9fd3ad60"
        },
        {
            "email": "5@gmail.com",
            "firstName": "dasad1",
            "_id": "691e608f3bd3de6d9fd3ad64"
        },
        {
            "email": "6@gmail.com",
            "firstName": "dasad1",
            "_id": "691e60913bd3de6d9fd3ad68"
        },
        {
            "email": "deep@gmail.com",
            "firstName": "deep",
            "_id": "692c27c9fa117cacd9d38db9"
        },
        {
            "email": "deep1@gmail.com",
            "firstName": "deep",
            "_id": "692c29aaa3fedc7c00eaabbb"
        }
    ]



    return <>
        <div className=" border-2 my-3 rounded-2xl p-3">

            <div>
                <h2 className="text-3xl">Users</h2>
                <input className="mt-2 border-2 w-full border-gray-400 rounded-2xl px-2 p-1" type="text" placeholder="Enter Name..." />
            </div>
            <div className="flex-col mt-4">
                {data.map((e) => {

                    return <div className="flex items-center gap-x-2 my-4" key={e.email}>
                        <p className="flex border-2 rounded-full justify-center items-center h-8 w-8 ">{e.email[0]}</p>
                        <p className="felx items-center">{e.firstName}</p>
                        <p className="felx items-center">{e.email}</p>
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