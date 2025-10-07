function QuoteBox_Type2({props}) {
    const {text, author, bio} = props;

    return (
        <div className="flex m-4">
            <div className="flex flex-col p-4 bg-blue-700 rounded-l-lg w-50">
                <div className="text-lg text-white">{author}</div>
                <div className="text-sm text-slate-300">{bio}</div>
            </div>
            <div className="p-8 w-80 rounded-r-full text-stone-500 border border-stone-200">{text}</div>
        </div>
    )
}

export default QuoteBox_Type2