//creating a promise

//create a promise using promise constructor take a function
//with two parameter resolve and reject
//here the promise will be either be resolved or it will be rejected
let promDemo = new Promise((resolve, reject) => {
  if(true){
    resolve('Promise Fulfilled')
  }
  else{
    reject("Promise Rejected")
  }
})

//fetch()

//Handling promise result

//we can use .then() method to handle the promise result
//if any error occurs, then we use .catch() method to handle the result
promDemo.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})
