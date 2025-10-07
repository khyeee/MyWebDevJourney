import { useState } from "react"

function StatePlayground_Widget1(props) {
    const [showIcon, setShowIcon] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center bg-green-100 border border-green-300 rounded-md p-6">
            {showIcon? <div className="rounded-full bg-teal-400 p-2 w-10 flex justify-center items-center mb-2 text-white">O</div> : null}
            
            <button 
                className="bg-teal-400 text-white p-2 border border-teal-800 rounded-full"
                onClick={() => setShowIcon(!showIcon)}
            >
                Click me!
            </button>
        </div>
    )
}

export default StatePlayground_Widget1