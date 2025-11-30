const InputBox = ({ mainHeading, subHeading, useEmail }) => {
    return (

        <div className="  flex justify-center -m-0.5">

            <div className="flex flex-col gap-y-2 p-4 w-4/6 border-2 border-[#E0E0E0]">
                <p>{mainHeading}</p>
                <input type="text" className="outline-0 border-b border-[#E0E0E0]" placeholder={subHeading} onChange={e => {
                    useEmail(e.target.value)
                }}></input>
            </div>

        </div>
    )
}

const InputBoxPassword = ({ mainHeading, subHeading, usePassword }) => {
    return (

        <div className="  flex justify-center -m-0.5">

            <div className="flex flex-col gap-y-2 p-4 w-4/6 border-2 border-[#E0E0E0]">
                <p>{mainHeading}</p>
                <input type="password" className="outline-0 border-b border-[#E0E0E0]" placeholder={subHeading} onChange={e => {
                    usePassword(e.target.value)
                }}></input>
            </div>

        </div>
    )
}
export {
    InputBox,
    InputBoxPassword
}