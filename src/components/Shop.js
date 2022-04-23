import React from 'react';
import { getProducts, getCategories } from '../api/products';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

function Shop() {
  const [products, setProducts] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [allProducts, setAllProducts] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        console.log('all products are:', data);
        setProducts(data);
        setAllProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategories();
        console.log('all categories are:', data);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleFilter = (event) => {
    const results = allProducts.filter((product) => {
      console.log(product.category);
      return product.category === parseInt(event.target.id);
    });
    setProducts(results);
  };

  // const handleClearFilter = async () => {
  //   const { data } = await getProducts();
  //   setProducts(data);
  // };

  return (
    <>
      <section className="search-section">
        <div className="has-text-centered is-size-3 p-6">
          <br />
          {categories ? (
            <div className="container is-fluid ">
              <div className="columns is-multiline">
                {categories.map((category) => {
                  return (
                    <div
                      className="column is-two-quarter my-1"
                      key={category.id}
                      id={category.id}
                      onClick={handleFilter}
                    >
                      {category.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>Filters loading...</div>
          )}
          <hr />
          <div className="container">
            {products && products.length > 0 ? (
              <div className="columns is-mobile is-centered">
                <div className="columns is-multiline scroll">
                  {products.map((product) => {
                    return (
                      <div
                        className="column is-one-third-desktop is-half-tablet is-one-mobile mt-6 placecard"
                        key={product.id}
                      >
                        <Link to={`/products/${product.id}`}>
                          <div className="card-image has-text-centered">
                            <h1 className="subtitle mx-2 py-3">
                              {product.name} {product.brand}
                              <br /> £ {product.price}
                            </h1>
                            <figure className="image square">
                              <img
                                className="imagecard"
                                src={product.image}
                                alt={product.name}
                              />
                            </figure>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p>There are no products that match your search.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
