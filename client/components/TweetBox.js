import React from 'react';

const TweetBox = (props) => {
  let url = '';
  if (props.tweet.entities.urls.length > 0) {
    url = props.tweet.entities.urls[0].expanded_url;
  }

  let columnsDisplay;
  if (props.columns === '2') {
    columnsDisplay = 5;
  } else if (props.columns === '3') {
    columnsDisplay = 3;
  }
  const createdAt = props.tweet.created_at.split(' ')
  const date = `${createdAt[0]} ${createdAt[1]} 
    ${createdAt[2]}, ${createdAt[5]} ${createdAt[3]}`;
  return (
    <div className={`bg-white border pt-3 rounded border-${props.colour} m-1 col-${columnsDisplay}`}>
      <div>
        <p className={"text-sm text-primary"}><small>{date}</small></p>
        <p>{props.tweet.text}</p>
      </div>
      <a href={url} className="text-primary">Link to tweet</a>
    </div>
  );
}

export default TweetBox;
