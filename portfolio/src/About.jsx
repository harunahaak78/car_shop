import work from "./img/work.jpg";

function AboutSection(){
    return(
        <div className=" container aboutSection py-5 mt-5">
        <div className="row align-items-center justify-content-center">
            <div className=" col-12 col-lg-5 ms-6">
                <img src={work} alt="work" className=' img-fluid  rounded w-50 ' />
            </div>
            <div className=" col-12 col-lg-7 me-6">
                <h1 className=' display-3 fw-bold text-primary '>About Me</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id iste,
                    necessitatibus est iusto ut? Quia nihil, excepturi suscipit explicabo autem dolore, 
                    possimus reprehenderit ratione veritatis consequuntur quae, iure dicta minus! 
                    Consequuntur alias error illo odit neque quae? Architecto, amet!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dignissimos voluptas iure. Incidunt facere 
                    repudiandae soluta, aliquid minus blanditiis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aut.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id iste,
                    necessitatibus est iusto ut? Quia nihil, excepturi suscipit explicabo autem dolore, 
                    possimus reprehenderit ratione veritatis consequuntur quae, iure dicta minus! 
                    Consequuntur alias error illo odit neque quae? Architecto, amet!</p>
            </div>
        </div>

    </div>

    );


}

export default AboutSection;