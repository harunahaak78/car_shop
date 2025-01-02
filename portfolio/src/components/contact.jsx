

const Contact = () =>{
    return( 
        <>
        <div className="contianer contact-contianer">
            <h1 className=" display-6 ms-1 fw-bold">Get In Touch</h1>
            <div className="row ms-3">
                <div className="col- col-lg-12">
                    <div class="mb-3 ms-2">
                        <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                        <input type="email" className="form-control w-25 border-black" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3 ms-2">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control w-25" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-12 col-lg-6"></div>
            </div>
            
        </div>
        </>
       
    );

}

export default Contact