import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/section1';
import AboutSection from './components/About';
import IconsSection from './components/IconsSection';




function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <AboutSection/> 
    <IconsSection/>
    {/* <Ball/> */}

      
    

    </>


  );
}

export default App;
