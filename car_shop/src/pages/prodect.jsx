import { Link } from "react-router-dom";
import Cardisplay from "../component/cardisplay";
import ProdectCard from "../component/prodectcard";
import AllProdect from "../component/allcarprodect";

const Proedect = () =>{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">Cars Ghana</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold" style={{"--bs-scroll-height":"100px;"}}>
                        <li className="nav-item">
                       <Link to="/" className=" text-decoration-none"> <a className="nav-link active" aria-current="page">Home</a> </Link>
                        </li>
                        <li className="nav-item">
                       <Link to="prodect" className=" text-decoration-none"> <a className="nav-link">Prodect</a> </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="contact" className=" text-decoration-none"><a className="nav-link">Contact</a></Link>
                        </li>


                </ul>
                <form className="d-flex ms-auto" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
   </nav>

   <Cardisplay/>
   <ProdectCard/>
   <AllProdect/>

        </>
       
    );

}

export default Proedect;