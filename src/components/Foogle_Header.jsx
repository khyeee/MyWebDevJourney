function Foogle_Header(props) {
    return (
        <div className="flex justify-between p-2 bg-orange-200 text-orange-800">
            <div className="flex items-center">
                <div className="flex p-2 mx-2">About</div>
                <div className="flex p-2 mx-2">Store</div>
            </div>
            <div className="flex items-center">
                <div className="flex p-2 mx-2">Preferences</div>
                <div className="flex p-2 mx-2">
                    ProfileIcon
                </div>
            </div>
        </div>
    )
}

export default Foogle_Header