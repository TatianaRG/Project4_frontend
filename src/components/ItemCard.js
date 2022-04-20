import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ id, name, brand, image, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="card-header">
        <h2 className="card-header-title is-centered">
          {' '}
          {brand} {name} £{price}
        </h2>
      </div>
      <div className="card-image has-text-centered">
        <figure className="image  is-4by3 ">
          <img className="imagecard" src={image} alt={name} />
        </figure>
      </div>
    </Link>
  );
};

export default ItemCard;
