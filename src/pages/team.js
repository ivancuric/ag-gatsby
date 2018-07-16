import React from 'react';
import Helmet from 'react-helmet';

const title = 'The Team';

const Image = ({ src, alt }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const size = 250;
  const params = ['c_fill', 'g_auto', 'f_auto', 'q_auto:best'].join(',');
  return (
    <img src={`${baseUrl}/${params},h_${size},w_${size}/${src}`} alt={alt} />
  );
};

const TeamMember = ({ img, name, role }) => (
  <div className="team-member">
    {img && <Image src={img} />}
    <h2>{name}</h2>
    <p>{role}</p>
  </div>
);

const TeamPage = () => {
  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        <h1>{title}</h1>
        <div className="team-grid">
          <TeamMember
            img="v1531133783/team/Sven_Horvatic"
            name="Sven Horvatić"
            role="Official Delegate"
          />
          <TeamMember
            img="v1531133782/team/Monika_Cerjak_Mileusnic"
            name="Monika Cerjak Mileusnić"
            role="Floor Manager"
          />
          <TeamMember
            img="v1531156923/Ita_Fucek"
            name="Ita Fuček"
            role="Assistant Floor Manager"
          />
          <TeamMember
            img="v1531746279/team/Matija_Kurelja"
            name="Matija Kurelja"
            role="Sparring Team Manager"
          />
          <TeamMember
            img="v1531133782/team/Marko_Stuhec"
            name="Marko Štuhec"
            role="Referee"
          />
          <TeamMember
            img="v1531133785/team/Kristina_Manjkas_Stuhec"
            name="Kristina Manjkas Štuhec"
            role="Referee"
          />
          <TeamMember
            img="v1531133784/team/Vatroslav_Mileusnic"
            name="Vatroslav Mileusnić"
            role="Referee"
          />
          <TeamMember
            img="v1531133782/team/Roman_Vucajnk"
            name="Roman Vučajnk"
            role="Referee"
          />
          <TeamMember
            img="v1531133782/team/Alen_Lovric"
            name="Alen Lovrič"
            role="Referee"
          />
          <TeamMember
            img="v1531133783/team/Hana_Cespic"
            name="Hana Cešpić"
            role="Judge"
          />
          <TeamMember name="Xavier George Claude Fabiani" role="Judge" />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
