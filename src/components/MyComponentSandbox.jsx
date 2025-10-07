{/*
function MyComponentSandbox({props}) {
    const { label, bgColour, txtColor } = props;

    return (
        <div>
            <div>{label}</div>
            <div className="text-rose-300 bg-red-700">one</div>
            <div className="text-slate-300 border-x-1 border-y-5 border-slate-600">two</div>
            <div className="text-lg bg-emerald-200 text-blue-600">three</div>
            <div className="text-xl text-purple-500">
                <div className="border-4 border-sky-500">four</div>
                <div className="bg-violet-200 border-l-8 border-purple-800">five</div>
            </div>
            
        </div>
    )
}
*/}

{/*
function MyComponentSandbox({props}) {
    return (
        <div>       
            <button className="border-2 border-green-600 text-green-400 px-8 py-4 rounded-md">First</button>
            <button className="rounded-lg bg-sky-400 text-white px-18 py-4 text-3xl m-4 hover:text-base">Second</button>
            <button className="bg-violet-100 text-violet-600 px-8 py-2 rounded-full m-4">Third</button>
            <button className="bg-cyan-700 text-cyan-200 p-18 rounded-lg hover:bg-cyan-200 hover:text-cyan-700">Fourth</button>
        </div>
    )
}
*/}

function MyComponentSandbox({props}) {
    const { label, bgColour, txtColor } = props;

    return (
        <div>
            <div>{label}</div>
            <div className="text-rose-300 bg-red-700">one</div>
            <div className="text-slate-300 border-x-1 border-y-5 border-slate-600">two</div>
            <div className="text-lg bg-emerald-200 text-blue-600">three</div>
            <div className="text-xl text-purple-500">
                <div className="border-4 border-sky-500">four</div>
                <div className="bg-violet-200 border-l-8 border-purple-800">five</div>
            </div>
            
        </div>
    )
}

export default MyComponentSandbox