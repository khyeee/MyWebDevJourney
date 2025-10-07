import { useState } from "react"
import ToDo_Comp_Form from "./ToDo_Comp_Form"
import ToDo_Comp_List from "./ToDo_Comp_List"

function ToDo_App(props) {
    const [toDo, setToDo] = useState([]);
    const addToDo = (text) => {
        if (!text) return;

        const newToDos = [...toDo, {id:Date.now(), text}];
        setToDo(newToDos);
    }

    const removeToDo = (id) => {
        const newToDos = toDo.filter(task => task.id !== id);
        setToDo(newToDos)
    }

    return (
        // <div className="flex flex-col w-full items-center border border-black-500">
        //     <h2>My ToDo Page header</h2>
        //     <div className="flex">
        //         <div className="flex flex-col w-full items-center border border-red-500 bg-blue-200">
        //             <p>Hello</p>
        //         </div>
        //         <div className="flex flex-col w-full items-center border border-green-500 bg-green-200">
        //             <p>World</p>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col items-center p-4 border border-black bg-slate-300">
            <h1>My Simple To-Do List</h1>
            {/* Pass the addTodo function down as a prop */}
            <ToDo_Comp_Form onSubmit={addToDo} />
            {/* Pass the todos array and removeTodo function down as props */}
            <ToDo_Comp_List todos={toDo} onRemove={removeToDo} />
        </div>
    )
}

export default ToDo_App