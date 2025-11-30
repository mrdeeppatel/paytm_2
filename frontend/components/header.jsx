const Header = ({ appName, userName }) => {


    return <>
        <div className="border-t-6 flex justify-between py-4 px-12 items-center mt-20">
            <p className="font-semibold text-6xl ">
                {appName}
            </p>
            <div className="flex items-center gap-2 ">
            <p className="flex items-center text-3xl justify-center border-2 rounded-full h-10 w-10">
              {userName[0]} 
            </p>
            <p className="flex font-semibold text-3xl">
                {userName}
            </p>
            </div>
        </div>
    </>
}

export {
    Header
}