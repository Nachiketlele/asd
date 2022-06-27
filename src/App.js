import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';
import Completed from './pages/Completed';
import Login from './pages/Login';
import RequiredAuth from './hoc/RequiredAuth';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<RequiredAuth><CounterApp/></RequiredAuth>}/>
            <Route path="/todoapp" element={<RequiredAuth><TodoApp/></RequiredAuth>}/>
            <Route path='/complete' element={<Completed/>}/>
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
