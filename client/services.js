const makeRequest = (url, options, callback) => {
  fetch(url, options)
  .then(res => res.json())
  .then(data => {
    callback(data)
  })
  .catch(error => console.log(error));
}

export {
  makeRequest,
}
