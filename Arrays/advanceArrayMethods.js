//forEach
var arr=["raj",100,"rahul",true]
arr.forEach(function(ele,index){
    console.log(ele,index)
})
console.log(arr)

//map
var arr1=[100,300,20,155,600]
var newarr1=arr1.map(function(element,index){
    return element*50
})
console.log(newarr1)
console.log(arr1)

//filter
var arr2=[101,300,20,155,600]
var newarr2=arr2.filter(function(ele, index){
    return ele>200
})
console.log(newarr2)
console.log(arr2)

//reduce
var arr3=[10,20,30,40,50,60]
var callback=(prev,current)=>{
    return prev+current
}
var res=arr3.reduce(callback,0)
console.log(res)

//sort
var names=["sachin", "Akash", "viart", "vijay", "goutham"]
console.log(names.sort())

var array1=[10,2,5,17]
var result=array1.sort(function(a,b){
    return a-b    //for descending order b-a
})
console.log(result)

//toString()
let bikes=["Yamaha","Bajaj","Honda","Tvs"]
console.log(bikes.toString())

//delete
let fruits=["banana","apple","grapes"]
delete fruits[2]
console.log(fruits)

//isArray()
let numbers=[1,2,34,5,6,7]
let string="Pentagonspace"

console.log(Array.isArray(numbers))
console.log(Array.isArray(string))
