function Foogle_MainContent(props) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center border border-red-700 bg-orange-100">
            <div className="flex justify-center text-6xl text-yellow-600 m-4">
                Foogle
            </div>
            <div className="flex justify-between bg-orange-200 p-2 rounded-full w-80">
                <div>faIcon</div>
                <input className="bg-orange-200 mx-2 px-6"></input>
            </div>
            <div className="flex justify-center">
                <button className="bg-purple-200 py-1 px-4 m-2 rounded-md text-sm">
                    Foogle Search
                </button>
                <button className="bg-purple-200 py-1 px-4 m-2 rounded-md text-sm">
                    Image Search
                </button>
            </div>
        </div>
    )
}

export default Foogle_MainContent  