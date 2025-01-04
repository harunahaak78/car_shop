import Record from '../json/carrecord.json'
const ProdectCard = ( ) =>{
    return(
         <>
         <div className=" row mt-3 justify-content-center">
            {
                Record.map(record  =>{
                    return(
                           <div className="col mb-2 hover-effects">
                               <div class="card w-100 mt-5 ms-3 me-3" style={{"width": "18rem;"}} key={record.id}>
                                    <img src={require('../img/'+record.image)} class="card-img-top cardimg" alt="cars" style={{height:'20vh'}}/>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">{record.name}</h5>
                                      
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

export default ProdectCard;