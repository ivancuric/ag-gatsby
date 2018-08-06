import React from 'react';
import Helmet from 'react-helmet';

const title = 'Registration';

const RegisterPage = () => (
  <section>
    <Helmet title={title} />
    <div className="container rt">
      <h1>{title}</h1>

      <h2>Entrance fee</h2>
      <p>
        The entrance fee for all contestants is 20€. Lunch is included in the
        price. There is no entrance fee for non-contestants. Lunch is paid
        separately.
      </p>

      <h2>Dinner</h2>
      <p>
        The celebratory dinner will be held on the evening of 25th of August.
        The price is 10€.
      </p>

      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfug_n_iJnQvO-JohELYfB3BdF-RLtHlvWfsiR-OukRf7PYIw/viewform"
        rel="noopener noreferrer"
      >
        Register as a contestant
      </a>
      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdZQmIEuvoOwgLPVUAgnr61HQtIJp2xoclgXgk33OxQXpsCYg/viewform"
        rel="noopener noreferrer"
      >
        Register as a non-contestant
      </a>
    </div>
  </section>
);

export default RegisterPage;
