import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeRequest } from '../services';
import actions from '../actions';
import TweetBox from './TweetBox';

class MakeSchool extends Component {
  constructor () {
    super();
    this.state = {
      settings: {},
    };
  }
  componentWillMount() {
    makeRequest('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool', 
    {
      method: 'GET'
    },
    this.props.makeSchool,
    )
    const settings = this.props.settings;
    if (settings) {
      this.setState({
        ...this.state,
        settings: {
          columns: settings.columns,
          colour: settings.colour,
        },
      });
    }
  }
  render () {
    const columns = this.state.settings.columns;
    const colour = this.state.settings.colour;
    const tweets = this.props.tweets.map(tweet => {
      return <TweetBox key={tweet.id} tweet={tweet} columns={columns} colour={colour} />
    })
    return (
      <div className="mb-5">
        <h3 className="text-center my-5">Tweets from Make school</h3>
        <div className="row justify-content-center">
          {tweets}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { tweets } = state.makeSchool;
  const { settings } = state.settings;
  return {
    tweets,
    settings,
  };
}

const mapDispatchToProps = (dispatch) => {
  const { makeSchool } = actions;
  return bindActionCreators({
    makeSchool
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeSchool);
