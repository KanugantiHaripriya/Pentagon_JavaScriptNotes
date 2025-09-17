//Fetch:
//fetch is a method which works internally as a promise. fetch method is used to make a network request or to call a API in js
//Fetch will return a promise in js

fetch('https://fakestoreapi.com/products/1') //make api call
  .then((res) => res.json()) //return promise fulfill
  .then((jsondata) => {
    console.log(jsondata)
  }) // fulfill
  .catch((error) => {
    console.log(error + "promise failed")
  }) //rejected
