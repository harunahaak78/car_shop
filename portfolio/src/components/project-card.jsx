import React from "react";
import Records from "../components/records.json";



const Cards = () =>{

    return(
        <>
        <div className=" row mt-3">
            {
            Records && Records.map( record  =>{
                    return(
                            <div className=" col mb-2">
                                <div className="card ms-5 w-75 h-100" style={{with:'18rem'}}  key={record.id}>
                                    <img src={require('../img/'+record.image)} className="card-img" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{record.name}</h5>
                                        <p className="card-text"> {record.description}</p>
                                        <a href="#" className="btn btn-primary">Github</a>
                                    </div>
                                </div>
                            </div>
                    
                    )
                } )
            }
        </div>
        </>
     
    );

}

export default Cards;