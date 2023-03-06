// define the callAPI function that takes a first name and last name as parameters
var callAPI = (departure, HDD) => {
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({ "departure": departure, "HDD": HDD });
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("https://voe39h9fl5.execute-api.us-east-2.amazonaws.com/staging", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}