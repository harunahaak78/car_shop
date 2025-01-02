import { Link  } from "react-router-dom";
function Navbar(){
    const toggledown = () =>{

    };
    return(
    <nav className="navbar navbar-expand-lg navbar-dark  ">
     <div className="container-fluid ">
        
            <a className="navbar-brand display-4 fw-bold fs-3" href="#">Abdul-Haak</a>
            <button className="navbar-toggler" onClick={toggledown} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav me-3 fw-bold fs-4" >
                   <Link to="/" className=" text-decoration-none"> <a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                   <Link to="/Project" className="text-decoration-none"> <a className="nav-link text-white" href="#">Project</a></Link>
                    <a className="nav-link  text-white btn btn-orange" href="#">Contact</a>
                </div>
            </div>
     </div>
  </nav>
    );

}

export default Navbar