import React from 'react';
import '../css/photoList.css';
import PhotoCard from './PhotoCard';

const PhotoList = props => {
  const photos = props.photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} />;
  });
  return (
 
  <div className="wrapper">{photos}</div>
 
  );
};

export default PhotoList;
