import React, { Component } from 'react';
import { makeRequest } from '../services';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import TweetBox from './TweetBox';

class NewSyCombinator extends Component {
  constructor () {
    super();
    this.state = {
      settings: {},
    }
  }
  componentWillMount() {
    makeRequest('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=newsycombinator', 
    {
      method: 'GET'
    },
    this.props.newSyCombinator,
    );

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
    });
    return (
      <div className="mb-5">
        <h3 className="text-center my-5">Tweets from News Y combinator</h3>
        <div className="row justify-content-center">
          {tweets}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { tweets } = state.newSyCombinator;
  const { settings } = state.settings;

  return {
    tweets,
    settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { newSyCombinator } = actions;
  return bindActionCreators({
    newSyCombinator
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSyCombinator);