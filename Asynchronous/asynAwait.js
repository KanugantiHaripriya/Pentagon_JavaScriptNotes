//async and await

//async: declare a function or method as asynchronous and can 
//pause its execution to wait for completion of other process
//await: make a suspension point where execution may wait for 
//the result of async function or methods

async function fun1(){
// Fetch the data from the URL
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// Convert the response to JSON
  let jsonData = await response.json();
// Log the JSON data
  console.log(jsonData);
// You can also assign jsonData to a variable if you want to use it later
  let result = jsonData;
// Log the result
  console.log(result);
}
fun1();
