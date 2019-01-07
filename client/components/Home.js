import React, { Component } from 'react';
import { makeRequest } from '../services';
import actions from '../actions';

export default class Home extends Component {
  componentWillMount() {
    // makeRequest('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool', {method: 'get'}, actions.MakeSchool)
  }
  render () {
    return (
      <div>
        This is Home
      </div>
    )
  }
}
