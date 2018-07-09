import React from 'react';
import Helmet from 'react-helmet';

const title = 'Team';

const Image = ({ src, alt }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const size = 200;
  const params = ['c_fill', 'g_auto', 'f_auto', 'q_auto:best'].join(',');
  return (
    <img src={`${baseUrl}/${params},h_${size},w_${size}/${src}`} alt={alt} />
  );
};

const TeamPage = () => {
  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        <h1>{title}</h1>
        <div className="team-grid">
          <div className="team-member">
            <Image src="v1531133783/team/Sven_Horvatic" />
            <h2>Sven Horvatić</h2>
            <p>Official Delegate</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Monika Cerjak Mileusnić</h2>
            <p>Floor Manager</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Ita Fuček</h2>
            <p>Assistant Floor Manager</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Marko Štuhec</h2>
            <p>Referee</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Vatroslav Mileunić</h2>
            <p>Referee</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Roman Vučajnk</h2>
            <p>Referee</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Alen Lovrič</h2>
            <p>Referee</p>
          </div>
          <div className="team-member">
            <Image src="v1531133782/team/Monika_Cerjak_Mileusnic" />
            <h2>Lui Elle</h2>
            <p>Referee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
