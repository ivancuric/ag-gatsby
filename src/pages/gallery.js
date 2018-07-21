import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const Img = ({ src }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const sizeSmall = 300;
  const sizeLarge = 1280;
  const params = ['f_auto', 'q_auto:best'].join(',');
  const srcSmall = `${baseUrl}/${params},w_${sizeSmall}/${src}`;
  const srcLarge = `${baseUrl}/${params},w_${sizeLarge}/${src}`;

  console.log(srcSmall);

  return (
    <ImageZoom
      image={{
        src: srcSmall,
        alt: '',
        className: 'img',
      }}
      zoomImage={{
        src: srcLarge,
        alt: '',
      }}
    />
  );
};

const images = [
  'v1531157646/tournament/Longsword_1.jpg',
  'v1531157647/tournament/Longsword_2.jpg',
  'v1531157647/tournament/Longsword_3.jpg',
  'v1531157648/tournament/Sidesword_1.jpg',
  'v1531157649/tournament/Sidesword_2.jpg',
  'v1531157647/tournament/Sidesword_3.jpg',
  'v1531157646/tournament/Judges_1.jpg',
  'v1531157645/tournament/Judges_2.jpg',
  'v1531157648/tournament/Judges_3.jpg',
  'v1531157649/tournament/Judges_5.jpg',
];

const GalleryPage = () => (
  <div className="container">
    <header>
      <h1>Gallery</h1>
      <p>Photos from the HEMAtom trial tournament</p>
    </header>
    <div className="image-gallery">
      {images.map(image => <Img src={image} key={image} />)}
    </div>
  </div>
);

export default GalleryPage;
