import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1 className="text-center display-2">Frontend Coding Challenge</h1>
        <p className="text-center display-4 py-4">Get updated with the latest Tweets from:<br />
          <Link to="makeschool" className="text-sm"><strong>@Makeschool</strong></Link><br />
          <Link to="newsycombinator" className="text-sm"><strong>@Newsycombinator</strong></Link><br />
          <Link to="ycombinator" className="text-sm"><strong>@Ycombinator</strong></Link><br />
        </p>
      </div>
    );
  }
}
