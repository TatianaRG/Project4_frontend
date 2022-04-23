import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ id, name, brand, image, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="card-image has-text-centered">
        <figure className="image is-2by3 ">
          <img className="imagecard" src={image} alt={name} />
        </figure>
      </div>
      <div className="image-card-overlay">
        <h1>
          {name} {brand}
          <br />£{price}
        </h1>
      </div>
    </Link>
  );
};

export default ItemCard;
