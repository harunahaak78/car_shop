import atom from '../img/atom.png';
import bootstrap from '../img/bootstrap.png';
import css from '../img/css-3.png';
import html from '../img/html-5.png';
import php from '../img/php.png';
import SQL from '../img/mysql.png';


function IconsSection(){
    return(
        <div className=" container">
            <div className="row flex ms-2 align-items-center justify-content-center">
                <div className="col-6 col-lg-3"> 
                    <img src={php} alt="" className=' img-fluid rounded  w-25'/>
                </div>
                <div className="col-6 col-lg-3">
                   <img src={atom} alt="" className=' img-fluid rounded w-25'/> 
                </div>
                <div className="col-6 col-lg-3">
                    <img src={css} alt="" className=' img-fluid rounded  w-25'/> 
                </div>

                <div className="col-6 col-lg-4">
                    <img src={html} alt="" className=' img-fluid rounded w-25'/> 
                </div>
                <div className="col-6 col-lg-4">
                    <img src={bootstrap} alt="" className=' img-fluid rounded w-25'/> 
                </div>
                <div className="col-6 col-lg-4">
                    <img src={SQL} alt="" className=' img-fluid rounded w-25'/> 
                </div>

            </div>

        </div>
    );

}

export default IconsSection;