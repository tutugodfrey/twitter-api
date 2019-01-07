import React, { Component } from 'react';
import { makeRequest } from '../services';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import TweetBox from './TweetBox';

 class MakeSchool extends Component {
  componentWillMount() {
    makeRequest('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool', 
    {
      method: 'GET'
    },
    this.props.makeSchool,
    )
  }
  render () {
    console.log(this.props.tweets, 'aaaaaaaaaaaa')
    const tweets = this.props.tweets.map(tweet => {
      return <TweetBox key={tweet.id} tweet={tweet} />
    })
    return (
      <div>
        {tweets}
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  const { tweets } = state.makeSchool;
  return {
    tweets,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { makeSchool } = actions;
  return bindActionCreators({
    makeSchool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeSchool);
