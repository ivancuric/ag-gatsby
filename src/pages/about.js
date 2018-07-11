import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const title = 'About the tournament';

const Image = ({ src, alt }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const size = 500;
  const params = ['c_fill', 'g_auto', 'f_auto', 'q_auto:best'].join(',');
  return <img src={`${baseUrl}/${params},w_${size}/${src}`} alt={alt} />;
};

const AboutPage = () => (
  <section>
    <Helmet title={title} />
    <div className="container rt">
      <h1>{title}</h1>

      {/* <h2>Categories and opportunities</h2> */}

      <h3>Longsword</h3>
      <ul>
        <li>Open tournament for both men and women</li>
        <li>Longsword category</li>
        <li>Up to 36 participants</li>
      </ul>

      <h3>One-handed swords</h3>
      <ul>
        <li>Open tournament for both men and women</li>
        <li>One-handed sword category includes sideswords and sabres</li>
        <li>Up to 12 participants</li>
      </ul>

      <h3>Sparring pits</h3>
      <ul>
        <li>
          Sparring pits are extra fighting areas where all participants can
          fight freely
        </li>
        <li>Results do not impact tournament</li>
        <li>With or without judicial overview</li>
        <li>Available throughout the entire event</li>
      </ul>

      <Link to="/rules">Rules</Link>

      <h3>Venue location</h3>

      <p>
        The venue will be held in “Boćarski dom Zrinjevac” sports hall. The hall
        itself is located near the Sava river and is surrounded by a park and
        has several grocery stores nearby. The location is easily accessible by
        tram and is only 15 minutes walking distance from student center
        “Stjepan Radić” where accommodations are arranged.
      </p>
      <p>
        The main part of the venue — the tournament, will be held in the main
        hall. All participants will have access to wardrobes, toilets, showers
        and refreshments.
      </p>
      <p>
        The secondary part of the venue — sparring pits, will be held outside
        the sports hall. The sparring pits are small fighting areas where all
        contestants will be able to spar when not competing in the main event.
      </p>

      <h3>Accomodations</h3>
      <p>
        Accommodations have been organized in the “Stjepan Radić” student
        center. Single and twin bed rooms are available. The “Stjepan Radić”
        student center is accessible by public transport. It also has a
        cafeteria that will be open throughout the entirety of the events
        duration.
      </p>

      <Image src="v1531332971/SC_zgrada.jpg" />
      <Image src="v1531332971/SC_soba_2.jpg" />
      <Image src="v1531332970/SC_soba_1.jpg" />

      <h4>Accommodation price per day</h4>
      <ul>
        <li>Single-bed room — 170HRK (~23€)</li>
        <li>Double-bed room — 140HRK (~19€) per bed</li>
      </ul>
      <p>The price includes breakfast.</p>
      <p>
        All participants must pay their entrance fee and their total price for
        the accommodations in order to compete.
      </p>
      <p>Lunch is included in the entrance fee for the venue.</p>
      <p>
        Please take notice that in order to compete in the venue all
        participants must pay both the entrance fee and the accommodations price
        for the entire stay during the initial sign up that will take place
        before the tournament starts.
      </p>
    </div>
  </section>
);

export default AboutPage;
