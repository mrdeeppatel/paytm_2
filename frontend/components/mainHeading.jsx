const MainHeading = ({ mainHeadingText, subHeadingText }) => {

    return <div className="  text-center flex flex-col justify-center  py-6 ">
        <div className="text-[#212121] text-2xl font-bold  ">
            {mainHeadingText}

        </div>
        <div className=" text-[#757575] ">
            {subHeadingText}
        </div>
    </div>

}

export {
    MainHeading
}