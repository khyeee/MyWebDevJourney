function GT_HMI_Header(props) {
    return (
        <div className="flex justify-between m-2">
            <div className="flex bg-blue-300 mx-2 items-center justify-left p-3">Company LOGO</div>
            <div className="flex flex-col border border-red-500 mx-2">
                <div className="border border-green-200">DD / MM / YYYY</div>
                <div className="border border-green-200">HH:MM:SS AM</div>
            </div>
            <div className="flex grow border justify-center border-black items-center">HMI TITLE</div>
            <div className="flex flex-col mx-2">
                <button>Refresh VBA Butt</button>
                <button>Flash Cache Butt</button>
            </div>
            <div className="flex flex-col mx-2">
                <p>SOME MODE</p>
                <p>SOME STATE</p>
            </div>
        </div>
    )
}

export default GT_HMI_Header