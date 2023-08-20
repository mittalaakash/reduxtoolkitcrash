import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AddTodo />
        <Todos />
      </header>
    </div>
  );
}

export default App;
