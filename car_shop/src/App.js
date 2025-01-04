import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Prodect from './pages/prodect';
import Contact from './pages/contact';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/prodect' element={<Prodect/>}/>
      < Route path='/contact' element={<Contact/>}/>
    </Routes>

    </>
  );
}

export default App;
