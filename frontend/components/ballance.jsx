const Ballance = ({ballance}) => {


    return <>
    <div className="py-4 text-2xl font-semibold rounded-2xl border-gray-900 border-4 mt-6 px-3">
        Your Ballance - ${ballance?ballance:"0"}
    </div>
    </>
}

export{
    Ballance
}