const SendMoneyButton = ({ userEmail }) => {

    // console.log(userEmail)
    return <>
        <div>

            <button className="bg-blue-200 border-2 p-2 h-fit rounded-2xl cursor-pointer" onClick={() => {
                alert(`SendMoney to ${userEmail}`)
            }}>Send Money </button><br />
            {/* {userEmail} */}
        </div>
    </>
}


export {
    SendMoneyButton
}