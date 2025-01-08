import { useLocation } from 'react-router-dom';
import Navbar from '../component/navbar';
import Visa from '../img/visa.png';
import Mastercard from '../img/master card.png'
import Paypal from '../img/paypal.png'

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
        <div className="card w-100 mx-auto mt-3">
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
         <h5 className='fw-bold mt-2'>How Would You Like To Pay?</h5>
         <div className="row">
             <div className="col paymentcontainer">
              <img src={Visa} alt="visa" className='img-fluid w-25 paymentimg' />
             </div>
             <div className="col paymentcontainer">
              <img src={Mastercard} alt="visa" className='img-fluid w-25 paymentimg' />
             </div>
             <div className="col paymentcontainer">
              <img src={Paypal} alt="visa" className='img-fluid w-25 paymentimg' />
             </div>
         </div>
          
          <h5 className='fw-bold mt-2'>Fill up your Personal information</h5>
          <form action="">
            <input type='text' placeholder='First Name' className=' border-none rounded-5 p-1' /><input type='text' placeholder='Last Name' className='ms-2 mt-3 border-none rounded-5 p-1'/><br/>
            <input type='email' placeholder='Emaill Address' className='w-100 mt-3 rounded-5 p-1'/><br/>
            <input type='text' placeholder='Card Number' className='w-100 mt-3 rounded-5 p-1'/><br/>
            <input type='text' className=' rounded-5 mt-3 w-25 p-1' placeholder='Exparition Date' />
            <input type='text' className=' rounded-5 mt-3 w-25 ms-1 p-1' placeholder='CVC' />
            <input type='text' className=' rounded-5 mt-3 w-25 ms-1 p-1' placeholder='ZIP' />
            <input type="submit" className='mt-3 w-100 rounded-5 p-2 paymentsubmit' value={"Make Payment"} />

          </form>
          
        </div>
      </div>
 
    </div>
    </>
  
  );
};



export default PaymentPage;
