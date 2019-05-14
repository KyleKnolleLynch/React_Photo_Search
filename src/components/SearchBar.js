import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  }


  onFormSubmit = (e) => {
    e.preventDefault();
   
    this.props.onSubmit(this.state.term);
    // clear fields after submit
    this.setState({term: ''});
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label className="ui top attached label">Image Search</label>
            <div className="ui icon input search">
              <input 
              type="text" 
              placeholder="Search" 
              className="ui input"
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})} 
              />
              <i className="icon search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
