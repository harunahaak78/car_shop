
function Navbar(){
    const toggledown = () =>{

    };
    return(
    <nav class="navbar navbar-expand-lg navbar-dark  ">
     <div class="container-fluid ">
        
            <a class="navbar-brand display-4 fw-bold fs-3" href="#">Abdul-Haak</a>
            <button className="navbar-toggler" onClick={toggledown} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav me-3 fw-bold fs-4" >
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-white" href="#">Project</a>
                    <a className="nav-link text-white btn btn-orange" href="#">Contact</a>
                </div>
            </div>
     </div>
  </nav>
    );

}

export default Navbar