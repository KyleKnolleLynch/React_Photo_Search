import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
    // clear fields after submit
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="ui segment">
      <a href="https://unsplash.com" className="ui orange right ribbon label link">Photo source: unsplash.com</a>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <div className="ui violet huge top attached label">Photo Search</div>
            <div style={{ paddingTop: '1.5rem' }} className="ui action input">
              <input
                type="text"
                placeholder="Enter Search Words.."
                className="ui input"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
              <button className="ui inverted violet icon button">
                <i className="search icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
