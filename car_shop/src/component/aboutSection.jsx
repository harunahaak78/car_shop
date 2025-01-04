import  audi from '../img/audi.jpg';

const AboutSection = () =>{
    return(
        <div className=" container  aboutcontainer  ">
            <div className="row  ">
                <div className="col col-lg-4">
                    <img src={audi} alt="" className=' img-fluid rounded-4' />
                </div>
                <div className="col col-lg-4 bg-body-tertiary rounded-4">
                   <h1 className=' display-5 text-center fw-bold mt-2'>
                    About Us 
                   </h1>
                   <p className=' lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit praesentium vel laboriosam ratione quia omnis amet fugit nobis porro alias minus ?</p>
                </div>
                <div className="col col-lg-4">
                    <img src={audi} alt="" className=' img-fluid rounded-4' />
                </div>
            </div>
        </div>
    );

}

export default AboutSection;