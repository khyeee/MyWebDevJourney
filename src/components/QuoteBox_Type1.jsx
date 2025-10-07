function QuoteBox_Type1({props}) {
    const {text, author, bio} = props;

    return (
        <div className="flex flex-col m-4 w-[400px] rounded-lg">
            <div className="flex justify-center text-cyan-200 bg-cyan-600 p-4 rounded-t-lg">{text}</div>
            <div className="flex flex-col p-4  items-center bg-slate-200 border border-stone-300 rounded-b-lg">
                <div className="text-2xl text-cyan-700">{author}</div>
                <div className="text-stone-600">{bio}</div>
            </div>
        </div>
    )
}

export default QuoteBox_Type1