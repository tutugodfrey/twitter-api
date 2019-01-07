import React from 'react';

const TweetBox = (props) => {
  let url = '';
  if (props.tweet.entities.urls.length > 0) {
    url = props.tweet.entities.urls[0].expanded_url
  }
  return (
    <div>
      <div>
        <p>{props.tweet.text}</p>
      </div>
      <div><strong>Created at</strong> <p>{props.tweet.created_at}</p></div>
      <p>Source:</p><a href={url}>Link to tweet</a>
    </div>
  )
}

export default TweetBox;
