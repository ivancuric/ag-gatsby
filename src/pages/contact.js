import React from 'react';
import Helmet from 'react-helmet';

const title = 'Contacts';

const ContactPage = (props) => {
  console.log(props);
  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        {/* <Img resolutions={props.data.file.childImageSharp.resolutions} /> */}
        <h1>{title}</h1>
        <ul>
          <li>
            <h2>Sven Horvatić</h2>
            <p>Official Delegate</p>
          </li>
          <li>
            <h2>Monika Cerjak Mileusnić</h2>
            <p>Floor Manager</p>
          </li>
          <li>
            <h2>Ita Fuček</h2>
            <p>Assistant Floor Manager</p>
          </li>
          <li>
            <h2>Marko Štuhec</h2>
            <p>Referee</p>
          </li>
          <li>
            <h2>Vatroslav Mileunić</h2>
            <p>Referee</p>
          </li>
          <li>
            <h2>Roman Vučajnk</h2>
            <p>Referee</p>
          </li>
          <li>
            <h2>Alen Lovrič</h2>
            <p>Referee</p>
          </li>
          <li>
            <h2>Lui Elle</h2>
            <p>Referee</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactPage;
