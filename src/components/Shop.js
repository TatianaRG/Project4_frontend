import React from 'react';
import { getProducts, getCategories } from '../api/products';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

function Shop() {
  const [products, setProducts] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        console.log('all products are:', data);
        setProducts(data);
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

  const handleClearFilter = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  const handleFilter = (event) => {
    const results = products.filter((product) => {
      console.log(product.category);
      // debugger;
      return product.category === parseInt(event.target.id);
    });
    setProducts(results);
  };

  return (
    <main>
      <div>
        <p>SHOP</p>
        <br />
        <p>Products</p>
      </div>
      <h1 className="noto-sans">ALL PRODUCTS</h1>
      {categories ? (
        <div className="categories-wrapper">
          {categories.map((category) => {
            return (
              <button key={category.id} id={category.id} onClick={handleFilter}>
                {category.name}
              </button>
            );
          })}
          <button onClick={handleClearFilter} className="clear-btn">
            Clear Selection
          </button>
        </div>
      ) : (
        <div>Filters loading...</div>
      )}
      <br />
      <div className="section search-display-wrapper">
        {products && products.length > 0 ? (
          <div className="columns">
            <div className="column">
              <div className="columns is-multiline scroll">
                {products.map((product) => {
                  return (
                    <div
                      className="column is-one-third-desktop is-half-tablet is-one-mobile mt-6 placecard"
                      key={product.id}
                    >
                      <ItemCard {...product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <p>There are no products that match your search.</p>
        )}
      </div>
    </main>
  );
}

export default Shop;
