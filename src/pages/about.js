import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const title = 'About the tournament';

const Image = ({ src, alt = '' }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const size = 640;
  const params = ['c_fill', 'g_auto', 'f_auto', 'q_auto:best'].join(',');
  return <img src={`${baseUrl}/${params},w_${size}/${src}`} alt={alt} />;
};

const AboutPage = () => (
  <section>
    <Helmet title={title} />
    <div className="container rt">
      <h1>{title}</h1>

      <section>
        {/* <h2>Categories and opportunities</h2> */}
        <h2>Longsword</h2>
        <ul>
          <li>Open tournament for both men and women</li>
          <li>Up to 30 participants</li>
        </ul>

        <h2>One-handed swords</h2>
        <ul>
          <li>Open tournament for both men and women</li>
          <li>One-handed sword category includes sideswords and sabres</li>
          <li>Up to 10 participants</li>
        </ul>

        <h2>Sparring pits</h2>
        <ul>
          <li>
            Sparring pits are extra fighting areas where all participants can
            fight freely
          </li>
          <li>Results do not impact tournament</li>
          <li>With or without judicial overview</li>
          <li>Available throughout the entire event</li>
        </ul>

        <Link to="/rules" className="button">
          Read the rules
        </Link>
      </section>

      <section className="section-split">
        <h2>The Venue</h2>

        <p>
          The venue will be held in “Boćarski dom Zrinjevac” sports hall. The
          hall itself is located near the Sava river and is surrounded by a park
          and has several grocery stores nearby. The location is easily
          accessible by tram and is only 15 minutes walking distance from
          student center “Stjepan Radić” where accommodations are arranged.
        </p>
        <Image src="v1531465706/Dvorana/bocarski-dom" />

        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.07494178278!2d15.95940045111753!3d45.78972631958144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68faa14a207%3A0x69a9f837e9a7ece9!2sBo%C4%87arski+dom+Zrinjevac!5e0!3m2!1sen!2shr!4v1531431779470"
          width="640"
          height="450"
          frameBorder="0"
          allowFullScreen
        />

        <p>
          The main part of the venue — the tournament, will be held in the main
          hall. All participants will have access to wardrobes, toilets, showers
          and refreshments.
        </p>

        <Image src="v1531465706/Dvorana/bocarski-dom-jogovi" />

        <p>
          The secondary part of the venue — sparring pits, will be held outside
          the sports hall. The sparring pits are small fighting areas where all
          contestants will be able to spar when not competing in the main event.
        </p>
        <p>Lunch is included in the entrance fee for the venue.</p>
      </section>
    </div>
  </section>
);

export default AboutPage;
