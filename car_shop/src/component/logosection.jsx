import Logo from '../json/logo.json';
const LogoSection = ()  =>{
    return(
        <div className="row mt-2 mb-2">
          
                {
                    Logo && Logo.map(record =>{
                        return(
                            <div className="col">
                                <div className="card border-0" key={record.id}>
                                    <img src={require('../img/'+record.image)} class="card-img-top cardimg" alt="cars" style={{height:'20vh'}}/>

                                </div>
                            </div>
                        )
                      
                    })
                }
    
        </div>
    );

}
 export default LogoSection;