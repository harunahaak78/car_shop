import work from "../img/work.jpg";

function AboutSection(){
    return(
        <div className=" container aboutSection py-5 mt-5">
        <div className="row align-items-center justify-content-center">
            <div className=" col-12 col-lg-5 ms-6">
                <img src={work} alt="work" className=' img-fluid  rounded w-60 ' />
            </div>
            <div className=" col-12 col-lg-7 me-6">
                <h1 className=' display-3 fw-bold text-primary '>About Me</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id iste,
                    necessitatibus est iusto ut? Quia nihil, excepturi suscipit explicabo autem dolore, 
                    possimus reprehenderit ratione veritatis consequuntur quae, iure dicta minus! 
                    Consequuntur alias error illo odit neque quae? Architecto, amet!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <div className="container skill">
                                <div className="prog">
                                    <h5>PHP</h5>
                                    <div className="bar">
                                        <span className="php"></span>
                                    </div>
                                </div>
                                <div className="prog ">
                                    <h5>React</h5>
                                    <div className="bar">
                                        <span className="React"></span>
                                    </div>
                                </div>
                                <div className="prog">
                                    <h5>My Sql</h5>
                                    <div className="bar">
                                        <span className="mysql"></span>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="container">
                            <div className="prog ">
                                    <h5>Html And CSS/Bootstrap</h5>
                                    <div className="bar"> 
                                          <span className="html"></span>
                                    </div>
                                </div>
                                <div className="prog">
                                    <h5>Javascript</h5>
                                    <div className="bar"> 
                                         <span className="javascript"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
            </div>
        </div>

    </div>

    );


}

export default AboutSection;