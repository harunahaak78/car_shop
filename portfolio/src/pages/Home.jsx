import Navbar from '../components/navbar';
import Intro from '../components/section1';
import AboutSection from '../components/About';
import IconsSection from '../components/IconsSection';
import Contact from '../components/contact';

const Home = () =>{
    return(
        <>
         <Navbar/>
          <Intro/>
          <AboutSection/> 
           <IconsSection/>
           <Contact/>
        </>
        
    );
}

export default Home;