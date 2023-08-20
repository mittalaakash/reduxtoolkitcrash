import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
      <input
        className='bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Add a todo...'
        required
      />
      <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
      >
        Add Todo
      </button>
    </form>
  );
}
export default AddTodo;
