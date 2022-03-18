///import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Menubar from './components/Menubar';
import Inicio from '../src/pages/Inicio';
import MyTask from '../src/pages/MyTask';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router>
     
      <div className='flex'>
        <Sidebar />
        <div className='vista'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Mytask" element={<MyTask />} />
        </Routes>
        </div>
      </div>
    </Router>
    
    

  );
}

export default App;
