import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem' ; 
import Button from './components/Button';
import './style.css'
function App() {
  return (
    <div className='todo-container'>
        <Header />
        <TodoItem />
        <Button />
    </div>
  );
}

export default App;
