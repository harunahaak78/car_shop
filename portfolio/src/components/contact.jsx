

const Contact = () =>{
    return( 
        <>
        <div className="contianer contact-contianer">
            <h1 className=" display-6 ms-1 mt-2 fw-bold">Get In Touch</h1>
            <div className="row ms-3">
                <div className="col">
                    <div class="mb-3 ms-2">
                        <label for="exampleFormControlInput1" className="form-label fw-bold">Email address:</label>
                        <input type="email" className="form-control w-75 border-black" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3 ms-2">
                        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Example textarea</label>
                        <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col">
                        <div class="footer-col">
                            <h4>Website</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            

        </>
       
    );

}

export default Contact