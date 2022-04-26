import React from 'react';
import { getSingleProduct } from '../api/products';
import { getSingleUser } from '../api/auth';
import { createBasketItem } from '../api/products';
import { getLoggedInUserId } from '../lib/auth';
import Popup from './Popup';

import { useParams, Link, useNavigate } from 'react-router-dom';

function Show() {
  const [product, setProduct] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [popup, setPopup] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const singleProduct = await getSingleProduct(id);
      setProduct(singleProduct);
    };
    getData();
  }, [id]);

  React.useEffect(() => {
    const getData = async () => {
      const singleUser = await getSingleUser();
      console.log(singleUser);
      setUser(singleUser);
    };
    getData();
  }, []);

  const handleAddBasket = async () => {
    try {
      await createBasketItem({
        quantity: 1,
        product: id,
      });
      navigate('/basket');
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <p className="go-back py-6">
          <Link to="/products"> &larr; back to all products</Link>
        </p>
        <div className="columns is-vcentered">
          <div className="column is-3">
            <h1 className="is-size-1 py-6 mx-2 title has-text-centered">
              {product.brand}
            </h1>
            <h1 className="is-size-2  pl-3 subtitle  has-text-centered">
              {product.name}
            </h1>
            <h1 className="is-size-4 title py-6 mx-2 has-text-centered">
              £{product.price}
            </h1>
            <p className=" has-text-centered">Details: {product.description}</p>
            <p className="mb-4  has-text-centered">
              {' '}
              Added on: {product.pub_date}
            </p>
          </div>
          <div className="column is-5 has-text-centered">
            <figure className="image py-6">
              <img src={product.image} alt={product.name} />
            </figure>
          </div>
          <div className="column is-4">
            {!getLoggedInUserId() ? (
              <p className="register-link subtitle">
                <Link to="/register">Register</Link> or{' '}
                <Link to="/login">Login</Link> to add a product to your basket.
              </p>
            ) : (
              <button
                className="button is-info is-medium is-rounded mr-5"
                id="btn-add"
                onClick={handleAddBasket}
              >
                Add to basket
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;
