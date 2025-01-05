import ProdectRecord from '../json/Allcarrecord.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProdect = () => {
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  function onFavoriteClick(id) {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  }

  function onProductClick(record) {
    navigate('/payment', { state: record });
  }

  return (
    <>
      <div className="row mt-5 justify-content-center">
        {ProdectRecord.map((record) => (
          <div className="col-md-3 mb-2 hover-effects" key={record.id}>
            <div
              className="card w-100 mt-5 ms-3 me-3"
              style={{ width: '18rem', cursor: 'pointer' }}
              onClick={() => onProductClick(record)}
            >
              <img
                src={require(`../img/${record.image}`)}
                className="card-img cardimg"
                alt={record.name}
                style={{ height: '20vh' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{record.name}</h5>
                <button
                  className={`favorite-btn ${favorites[record.id] ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onFavoriteClick(record.id);
                  }}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProdect;
