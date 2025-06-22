function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
      <span
        onClick={onToggle}
        className={`cursor-pointer flex-1 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
