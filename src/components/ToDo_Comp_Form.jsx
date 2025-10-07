import { useState } from "react"

function ToDo_Comp_Form(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(input)
        setInput('');
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex bg-white m-4 border-2 border-black w-100 rounded-md p-2"
        >
            <input 
                type="text" 
                placeholder="Add a new task"
                value={input}
                onChange={handleChange}
                className="flex-grow rounded-sm mr-2"
            />
            <button 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                
            >   
                Add Task
            </button>
        </form>
    )
}

export default ToDo_Comp_Form