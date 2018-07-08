import React from 'react';
import Helmet from 'react-helmet';

const title = 'Tournament Schedule';

const SchedulePage = () => (
  <section>
    <Helmet title={title} />
    <div className="container">
      <h1>{title}</h1>
      <p>This is the schedule page.</p>
    </div>
  </section>
);

export default SchedulePage;
