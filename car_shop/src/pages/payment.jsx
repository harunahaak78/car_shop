import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const { state: product } = useLocation();

  if (!product) {
    return <div>No product selected.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>
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
  );
};

export default PaymentPage;
