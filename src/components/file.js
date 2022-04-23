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
                  <Link to={`/products/${product.id}`}>
                    <div className="card-image has-text-centered">
                      <h1 className="subtitle mx-2 py-2">
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
      </div>
    ) : (
      <p>There are no products that match your search.</p>
    )}
  </div>
</main>;


// <a href="https://www.linkedin.com/in/tatiana-guzun-a54125146/">
            //   <FontAwesomeIcon icon={faLinkedin} size="2x" />
            // </a>{' '}
            // <a href="https://github.com/TatianaRG?tab=repositories">
            //   <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>{' '}