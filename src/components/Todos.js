import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import Delete from './delete.svg';

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  console.log(todos);
  return (
    <div>
      <ul className='space-y-4 list-none'>
        {todos.map(todo => (
          <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}
          >
            <p>{todo.text}</p>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className='text-white bg-red-400 border-0 py-2 px-2 focus:outline-none hover:bg-red-500 rounded text-md ml-3'
            >
              <img src={Delete} alt='delete-logo' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
