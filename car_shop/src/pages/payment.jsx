import { useLocation } from 'react-router-dom';
import Navbar from '../component/navbar';

const PaymentPage = () => {
  const { state: product } = useLocation();

  if (!product) {
    return <div>No product selected.</div>;
  }

  return (
    <>
    <Navbar/>
     <div className="container mt-5">
      <h2 className=" display-4 text-center">Payment Page</h2>
      <div className="row mb-3">
        <div className="col">
        <div className="card w-50 mx-auto mt-3">
        <img
          src={require(`../img/${product.image}`)}
          className="card-img-top"
          alt={product.name}
          style={{ height: '30vh' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary">Proceed to Payment</button>
        </div>
      </div>
        </div>
        <div className="col">
          <h5>Fill up your Personal information</h5>
          <input type='text' placeholder='First Name' className=' border-none rounde' /><input type='text' placeholder='Last Name' className='ms-2'/>
        </div>
      </div>
 
    </div>
    </>
  
  );
};



export default PaymentPage;
