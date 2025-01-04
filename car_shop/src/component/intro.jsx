import Range from '../img/range-rover_bg_removed.png.png';

const IntroSection = () =>{
    return(
        <div className="container-fluid intro bg-black">
            <div className="row">
                <div className="col-12 align-content-center justify-content-center">
                    <div className="contant container ms-auto text-white">
                        <h1 className=" display-4 fw-bold "><span>By</span> Or<span> Rent</span> Your Dream Car</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis aliquam dolor repellendus facilis
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit sed odit 
                            veritatis consequatur aliquam ipsa quod cupiditate non. Voluptates.
                        </p>
                        <button className="carbtn">Prodect</button>
                    </div>
                    <img src={Range} alt="rangr rover" className=' img-fluid mb-3' />

                   
                </div>
            </div>
        </div>
    );

}

export default IntroSection;