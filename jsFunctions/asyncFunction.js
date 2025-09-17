
//write a code to fetch api in javascript
async function fetchData(){
	let response = await fetch('https://fakestoreapi.com/products/1')
    // console.log(response)      
	let data = await response.json();
	console.log(data)
}
fetchData()