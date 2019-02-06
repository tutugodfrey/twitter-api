// function for making api calls
const makeRequest = (url, options, callback) => {
  fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    callback(data)
  })
  .catch(error => console.log(error));
}

export {
  makeRequest,
}
