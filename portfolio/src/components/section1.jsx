import  Profiler  from "../img/profile-1.jpg";
function Intro(){
    return(
        <div className="container-fluid  py-5 intro d-flex justify-content-between">
            {/* <div className="intro-contant container-fluid ms-5 ">
                <h1><span>Abdul</span>-Haak Haruna</h1>
                <p>I'm a professional Software Engineer</p>
                <button className="btn ">My Porject</button>
            </div>
            <img src={Profiler} className="rounded  " alt="PROFILER-PIC"></img>
         */}
         <div className="row flex-gap-2 align-items-center justify-content-center">
            <div className="col-12 col-lg-5 ms-2 intro-contant">
                <h1 className='display-4 fw-bold  text-white'><span>Abdul</span>-Haak Haruna</h1>
                <p className='lead text-white'>I'm a professional Software Engineer</p>
                <button className="btn ">My Porject</button></div>
            <div className="col-12 col-lg-6  ">
            <img src={Profiler} className="rounded img-fliud " alt="PROFILER-PIC"></img>
            </div>
         </div>
        </div>
    );

}
export default Intro;