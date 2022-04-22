import React from 'react';
import { getSingleProduct } from '../api/products';
import { getSingleUser } from '../api/auth';
import { createBasketItem } from '../api/products';

import { useParams, Link, useNavigate } from 'react-router-dom';

function Show() {
  const [product, setProduct] = React.useState(null);
  const [user, setUser] = React.useState(null);
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

  // const handleAddBasket = () => {
  //   const productId = product.id;

  //   // Get the current basket - will return undefined if not
  //   let currentBasketItems = JSON.parse(sessionStorage.getItem('basketItems'));

  //   // Does the person have anything in their basket?
  //   if (!currentBasketItems) {
  //     currentBasketItems = [];
  //   }

  //   // Add product to the basket
  //   currentBasketItems.push(productId);

  //   // Save the updated basket to session storage
  //   sessionStorage.setItem('basketItems', JSON.stringify(currentBasketItems));
  // };

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-3">
            <h1 className="is-size-1 py-6 mx-2  title">{product.brand}</h1>
            <h1 className="is-size-2  pl-3 subtitle">{product.name}</h1>
            <p>Details: {product.description}</p>
            <p className="mb-4"> Added on: {product.pub_date}</p>
          </div>
          <div className="column is-5 has-text-centered">
            <figure className="image py-6">
              <img src={product.image} alt={product.name} />
            </figure>
          </div>
          <div className="column is-4">
            <div className="is-size-4 py-6 mx-2">Price: £{product.price}</div>
            <button
              className="button is-info is-medium is-rounded mr-5"
              onClick={handleAddBasket}
            >
              Add to basket
            </button>
            <button className="button is-info is-medium is-rounded">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;
