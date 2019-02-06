import React, { Component } from 'react';
import { makeRequest } from '../services';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import TweetBox from './TweetBox';

class YCombinator extends Component {
  constructor () {
    super();
    this.state = {
      settings: {},
    };
  }
  componentWillMount() {
    makeRequest('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=ycombinator', 
    {
      method: 'GET'
    },
    this.props.yCombinator,
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
    })
    return (
      <div className="mb-5">
        <h3 className="text-center my-5">Tweets from Y Combinator</h3>
        <div className="row justify-content-center">
          {tweets}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { tweets } = state.yCombinator;
  const { settings } = state.settings;
  return {
    tweets,
    settings,
  };
}

const mapDispatchToProps = (dispatch) => {
  const { yCombinator } = actions;
  return bindActionCreators({
    yCombinator
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YCombinator);
