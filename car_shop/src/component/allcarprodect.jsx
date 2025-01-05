import ProdectRecord from '../json/Allcarrecord.json';
import { useState } from 'react';


const AllProdect = () =>{
    const [favorite, setfavorite] = useState();
    
    function onFavoriteClick() {
        setfavorite(`${favorite? "active" : ""}`)
      
    }
    return(
        <>
         <div className=" row mt-5 justify-content-center">
            {
                ProdectRecord.map((record)  =>{
                    return(
                           <div className="col-md-3 mb-2 hover-effects">
                               <div class="card w-100 mt-5 ms-3 me-3" style={{"width": "18rem;"}} key={record.id}>
                                    <img src={require('../img/'+record.image)} class="card-img cardimg" alt="cars" style={{height:'20vh'}}/>
                                    <div class="card-body">
                                     <h5 class="card-title fw-bold">{record.name}</h5> 
                                     <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                                          ♥
                                      </button>
                                      
                                    </div>
                               </div>
                          </div>
                       
                    )
                

                })
            }
        </div>
         </>
    );

}

export default AllProdect;