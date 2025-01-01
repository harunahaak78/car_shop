import Navbar from '../components/navbar';
import Intro from '../components/section1';
import AboutSection from '../components/About';
import IconsSection from '../components/IconsSection';

const Home = () =>{
    return(
        <>
         <Navbar/>
          <Intro/>
          <AboutSection/> 
           <IconsSection/>
        </>
        
    );
}

export default Home;