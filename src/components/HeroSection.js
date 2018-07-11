import React from 'react';
import Link from 'gatsby-link';

// const BgImageStyle = src => {
//   const baseUrl =
//     'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
//   const height = 600;
//   const params = ['f_auto', 'q_auto:best'].join(',');
//   return {
//     backgroundImage: `url(${baseUrl}/${params},h_${height}/${src})`,
//   };
// };

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section-inner">
      <div className="container">
        <div className="rt">
          <h1 className="hero-title">Neyman Fencing Tournament 2018</h1>
          <p className="hero-date">25th and 26th of August 2018</p>
          <p>
            First international longsword and one-handed sword open tournament
            in Croatia held by Ars Gladiatoria Zagreb and Academia Artis
            Dimicatoriae
          </p>
          <Link className="button" to="/register">Get the ticket</Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
