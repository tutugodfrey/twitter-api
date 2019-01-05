
fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool', {
  method: 'get',
})
.then(res => res.json())
.then(data => {
  displayTweet(data)
})
.catch(error => console.log(error));


const displayTweet = (data) => {
  console.log(data)
}
