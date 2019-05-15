import React, { Component } from 'react';

class PhotoCard extends Component {
  constructor() {
    super();

    this.state = { spans: 0 };

    this.photoRef = React.createRef();
  }

  componentDidMount() {
    this.photoRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const photoHeight = this.photoRef.current.clientHeight;
    const spans = Math.ceil(photoHeight / 10 + 1);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.photoRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default PhotoCard;
