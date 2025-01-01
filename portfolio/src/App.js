import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Projects';




function App() {
  return (
    <>
    {/* <Navbar/>
    <Intro/>
    <AboutSection/> 
    <IconsSection/> */}
    {/* <Ball/> */}

    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>

      </Routes>
    </main>



      
    

    </>


  );
}

export default App;
