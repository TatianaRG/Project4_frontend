import React from 'react';

function Homepage() {
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
    </>
  );
}

export default Homepage;
