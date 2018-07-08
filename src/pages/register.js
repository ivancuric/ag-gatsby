import React from 'react';
import Helmet from 'react-helmet';

const title = 'Registration';

const RegisterPage = () => (
  <section>
    <Helmet title={title} />
    <div className="container">
      <h1>{title}</h1>

      <h2>Entrance fee</h2>
      <p>
        The entrance fee for all contestants is 30€. Lunch is included in the
        price. There is no entrance fee for non-contestants. Lunch is paid
        separately.
      </p>

      <h2>Accommodation price per day</h2>
      <ul>
        <li>Single-bed room - 170HRK (~23€)</li>
        <li>Double-bed room - 140HRK (~19€) per bed</li>
      </ul>
      <p>The price includes breakfast.</p>
      <p>
        All participants must pay their entrance fee and their total price for
        the accommodations in order to compete.
      </p>

      <h2>Dinner</h2>
      <p>
        Celebratory dinner will be held on the evening of 25th of august. The
        price is 10€.
      </p>
    </div>
  </section>
);

export default RegisterPage;
