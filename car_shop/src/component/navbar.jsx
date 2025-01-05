import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/prodect`, { state: { searchQuery: SearchQuery } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Cars Ghana
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link to="/" className="text-decoration-none">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="prodect" className="text-decoration-none">
                <a className="nav-link" href="#">
                  Prodect
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="text-decoration-none">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={SearchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
