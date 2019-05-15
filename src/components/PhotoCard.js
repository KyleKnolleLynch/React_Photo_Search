import React, { Component } from 'react';

class PhotoCard extends Component {
  constructor() {
    super();

    this.photoRef = React.createRef();
  }

  componentDidMount() {
    this.photoRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    
  }

render() {
  const { description, urls } = this.props.photo;
  return (
    <div>
      <img 
      ref={this.photoRef}
      src={urls.regular} 
      alt={description} 
      />
    </div>
  );
}

}


export default PhotoCard;