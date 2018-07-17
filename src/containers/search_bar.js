import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input 
            placeholder="Search for a City" 
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;