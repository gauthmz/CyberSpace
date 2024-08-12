import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
