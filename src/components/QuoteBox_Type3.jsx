function QuoteBox_Type3({props}) {
    const {text, author, bio} = props;

    return (
        <div className="flex flex-col m-4 items-start">
            <div className="bg-rose-400 p-6 text-white text-m rounded-t-lg rounded-r-lg border border-rose-600">{text}</div>
                <div className="flex flex-col rounded-b-lg p-4 bg-rose-100 border-l border-r border-b border-b-red-600">
                    <div className="text-red-800">{author}</div> 
                    <div className="text-red-400 text-sm">{bio}</div>
                </div>
        </div>
    )
}

export default QuoteBox_Type3