import React from 'react';
import { getSingleProduct } from '../api/products';

import { useParams } from 'react-router-dom';

function Show() {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const singleProduct = await getSingleProduct(id);
      setProduct(singleProduct);
    };
    getData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section className="box">
      <div className="flex-box">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div>
          <h1>{product.name}</h1>
          <h3> £{product.price}</h3>
          <p>{product.description}</p>
          <section className="flex-box align-center space-between">
            <div className="flex-box justify-center fav-btn"></div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Show;
