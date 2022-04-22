import React from 'react';
import { getSingleUser } from '../api/auth';
import { deleteBasketItem, getAllBasketItems } from '../api/products';
import { Link } from 'react-router-dom';

function Basket() {
  const [basketItems, setBasketItems] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const items = await getAllBasketItems();
      setBasketItems(items);
      console.log('basket items are:', items);
    };
    getData();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      const singleUser = await getSingleUser();
      console.log(singleUser);
      setUser(singleUser);
    };
    getData();
  }, []);

  const removeFromBasket = async (event) => {
    try {
      await deleteBasketItem(event.target.id);
      const updatedBasket = await getAllBasketItems();
      console.log('items after deleting:', updatedBasket);
      setBasketItems(updatedBasket);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <div className="section">
    //   <div className="container">
    //     <h1 className="is-size-3 py-5 mt-2 title">Shopping cart</h1>
    //     <p>Please review and confirm your order</p>
    //     <div className="columns">
    //     {basketItems && basketItems.length >0 ? (
    //      {basketItems.map((item, index) => {
    //        return (
    //          <div className='column is-half' key={item.id}>
    //          <figure className='image is-128x128'>
    //          <img src={item.product.image} alt={item.product.name}/>
    //          </figure>
    //          </div>
    //        )

    //      })}

    //     )}:

    //     </div>
    //   </div>
    // </div>

    <div className="section">
      <div className="container is-max-desktop">
        <div className="container py-6">
          <p className="go-back">
            <Link to="/products"> &larr; back to all products</Link>
          </p>

          <div className="columns is-multiline">
            {basketItems && basketItems.length > 0 ? (
              <div className="column is-two-thirds py-6">
                {basketItems.map((item, index) => {
                  return (
                    <div
                      className="card is-half is-horizontal columns py-6"
                      key={item.id}
                    >
                      <figure className="image is-centered is-128x128">
                        <img src={item.product.image} alt={item.product.name} />
                      </figure>
                      <div className="card-content">
                        <p className="title">
                          {item.product.name} {item.product.brand}
                        </p>
                        <p className="subtitle">
                          <strong> 1 x £ {item.product.price}</strong>
                        </p>
                        <button
                          onClick={removeFromBasket}
                          id={item.id}
                          className="button is-danger is-outlined is-rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="column is-two-thirds py-6">
                <h1 className="title">Your basket is empty...</h1>
              </div>
            )}
            <div className="column is-one-third py-6">
              <div className="card is-vertical">
                <h1 className="card-header-title">Shopping Bag:</h1>
                <hr />
                <div className="card-content has-text-weight-bold">
                  Total Inc VAT: £
                  {basketItems?.reduce((total, curr) => {
                    return total + curr.product.price;
                  }, 0)}
                </div>
              </div>
              <div className="card-content">
                <button className="button is-info is-rounded is-fullwidth">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;