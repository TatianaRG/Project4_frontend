import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
import { getNewness } from '../api/products';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ItemCard from './ItemCard';

function Homepage() {
  const [newness, setNewness] = useState([]);
  // const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const items = await getNewness();
      setNewness(items);
    };
    getData();
  }, []);
  console.log('new items are:', newness);

  return (
    <>
      <section className="hero is-large is-info" id="hero-image">
        <div className="hero-body">
          <p className="title">Large hero</p>
          <p className="subtitle">Large subtitle</p>
        </div>
      </section>
      <marquee scrollamount="10" direction="left" behavior="scroll">
        <h2 style={{ fontWeight: 900, color: '#2b580c' }}>
          {' '}
          RE/WEAR | REDUCE | REPURPOSE | RECYCLE | RE/WEAR | REDUCE | REPURPOSE
          | RECYCLE | RE/WEAR | REDUCE | REPURPOSE | RECYCLE | RE/WEAR | REDUCE
          | REPURPOSE | RECYCLE | RE/WEAR | REDUCE | REPURPOSE | RECYCLE |
          RE/WEAR | REDUCE | REPURPOSE | RECYCLE | RE/WEAR |{' '}
        </h2>
      </marquee>
      <section className="hero is-light">
        <div className="hero-body">
          <p className="title">New in</p>
          <Splide
            options={{
              perPage: 3,
              rewind: true,
              arrows: true,
              pagination: false,
              drag: 'free',
              gap: '20px',
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                500: {
                  perPage: 1,
                },
              },
            }}
          >
            {newness ? (
              newness.map((item) => (
                <SplideSlide key={item.id}>
                  <ItemCard key={item.id} {...item} />
                </SplideSlide>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Splide>
        </div>
      </section>
      )
    </>
  );
}

export default Homepage;
