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
      <main className="home-section">
        <section className="hero is-large is-info" id="hero-image">
          <div className="hero-body is-flex"></div>
        </section>
        <marquee scrollamount="10" direction="left" behavior="scroll">
          <h2
            style={{ fontWeight: 1900, color: '#2b580c' }}
            className="has-text-weight-bold"
          >
            {' '}
            RE/WEAR | REDUCE | REPURPOSE | RECYCLE | RE/WEAR | REDUCE |
            REPURPOSE | RECYCLE | RE/WEAR | REDUCE | REPURPOSE | RECYCLE |
            RE/WEAR | REDUCE | REPURPOSE | RECYCLE | RE/WEAR | REDUCE |
            REPURPOSE | RECYCLE | RE/WEAR | REDUCE | REPURPOSE | RECYCLE |
            RE/WEAR |{' '}
          </h2>
        </marquee>
        <div className="hero-body">
          <div className="container is-mobile">
            <p className="title">New in</p>
            <Splide
              options={{
                perPage: 4,
                rewind: true,
                arrows: true,
                pagination: false,
                drag: 'free',
                gap: '20px',
                breakpoints: {
                  1024: {
                    perPage: 4,
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
                  <SplideSlide className="image " key={item.id}>
                    <ItemCard className="imagecard" key={item.id} {...item} />
                  </SplideSlide>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Splide>
          </div>
        </div>
        )
      </main>
    </>
  );
}

export default Homepage;
