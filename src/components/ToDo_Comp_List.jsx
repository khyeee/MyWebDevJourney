// import RemoveIcon from '../assets/removetest.svg?react';
import RemoveIcon from '../assets/myRemoveIcon';

function ToDo_Comp_List({ todos, onRemove }) {
  // Use map to loop through the 'todos' array and create JSX for each item
  return (
    <ul className="w-full todo-list border border-black bg-slate-300 rounded-md">
      {todos.map((todo, index) => (
        <li key={todo.id} className="todo-item">
            <div className="flex justify-between m-2">
                <span>{`${index + 1}. ${todo.text}`}</span>
                <button 
                    className="inline-flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs px-3 py-2 text-center me-2 mb-2"
                    onClick={() => onRemove(todo.id)}>
                    <RemoveIcon className="w-4 h-4 me-2" />
                    <span>Remove</span> 
                </button>
            </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDo_Comp_List