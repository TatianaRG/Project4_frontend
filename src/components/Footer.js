import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Copyright © RE/WEAR 2022</p>
      </div>

      <div className="columns">
        <div className="column">
          <p
            className="bd-footer-link 
                has-text-left"
          >
            RE/WEAR is an online marketplace based in UK for buying, selling and
            exchanging new or secondhand items, mainly clothing and accessories.
          </p>
          <p>
            This was build as my final project during the GA Software
            Engineering bootcamp.
          </p>
        </div>

        <div className="column">
          <h4
            className="bd-footer-title
                 has-text-weight-medium
                 has-text-justify"
          >
            Contact me <br />
            <a href="https://www.linkedin.com/in/tatiana-guzun-a54125146/">
              LinkedIn
            </a>{' '}
            <br />
            <a href="https://github.com/TatianaRG?tab=repositories">
              GitHub
            </a>{' '}
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
