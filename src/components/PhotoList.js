import React from 'react'


const PhotoList = (props) => {
   const photos = props.photos.map(photo => {
     return <img src={photo.urls.regular} alt="pics" />
  });
return <div>{photos}</div>
}

export default PhotoList
