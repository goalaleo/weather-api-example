import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
    /*
      after = the line says: 'this', which is our SearchBar, has a function called
      onInputChange. Bind that function to 'this' (which is search bar), and then
      replace onInputChange with this new bound instance of this function.
      (we're kind of overwriting the local method here)
    */
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({  term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
           />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  /*
    this causes the action creator, whenever it gets called and returns an action,
    bindActionCreators with dispatch makes sure that that action flows down to the
    middleware and the reducers inside of our redux application.
  */
  return bindActionCreators({ fetchWeather }, dispatch);
}

/*
  the null is there because first argument is for state, second for dispatch
  this container doesn't care about state at all.
*/
export default connect(null, mapDispatchToProps)(SearchBar)
