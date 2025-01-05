import Lambo  from '../img/car_bg_removed.png.png';
import fxf from '../img/4x4_bg_removed.png.png'

const Cardisplay = () =>{
    return(
        <div className=" container-fluid">
            <div className="row ms-1 me-1 mt-3 justify-content-center">
                <div className="col-5 col-md-6 bg-body-secondary rounded-4 me-1">
                    <div className="row">
                        <div className="col">
                            <h1 className=" display-6 fw-bold">Buy  any Car you Want! </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing \
                                elit. Perferendis, molestias? Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Earum, id!
                            </p>
                        </div>
                        <div className="col mt-auto">
                            <img src={Lambo} alt="" className='carimg' />

                        </div>
                    </div>
                </div>
                <div className="col-5 col-md-5 bg-body-tertiary rounded-4">
                <div className="row">
                        <div className="col">
                        <h1 className=" display-6 fw-bold">Rent  any Car you Want! </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing \
                                elit. Perferendis, molestias? Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Earum, id!
                            </p>
                        </div>
                        <div className="col mt-auto">
                            <img src={fxf} alt="" className='carimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Cardisplay;