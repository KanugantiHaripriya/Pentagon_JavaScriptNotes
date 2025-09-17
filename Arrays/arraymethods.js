//push()
let arr=[]
arr.push(10) // appends at the end
arr.push('virat')
arr.push(true)
arr.push(333)
console.log(arr) //[ 10, 'virat', true, 333 ]

//pop()
var arr1 = [10, "sachin", true, 15.6789, "viart", "y"];
console.log(arr1);     // [10, "sachin", true, 15.6789, "viart", "y"]
arr1.pop();     // removes last element from an array       
console.log(arr1);     // [10, "sachin", true, 15.6789, "viart"]
arr1.pop();            
arr1.pop();
console.log(arr1);     // [10, "sachin", true]

//unshift 
var arr2 = [10, "sachin", true, 27.90];
console.log(arr2);               // [10, "sachin", true, 27.90]
arr2.unshift("virat"); // adds at the beginning of the array
console.log(arr2);               // ["viart", 10, "sachin", true, 27.90]
arr2.unshift(18);
console.log(arr2);               // [18, "viart", 10, "sachin", true, 27.90]

//indexOf
var arr4=[10, "sachin", true, 15.6789, "viart", "y"]

console.log(arr4)
console.log(arr4.indexOf(true))
console.log(arr4.indexOf("asd"))

//lastIndexOf
var arr5=["raj",100,"rahul","sachin",true,100,99]
console.log(arr5.lastIndexOf(100))

//join
var arr6=[10,"sachin",true,15.6789,"viart","y"]
console.log(arr6.join())
console.log(arr6.join(' '))
console.log(arr6.join('$'))

//includes
var arr7=[10,"sachin",true,15.6789,"viart","y"]
console.log(arr7.includes("sachin"))
console.log(arr7.includes(777))

//reverse
var arr8=[10,"sachin",true,15.6789,"viart","y"]
console.log(arr8)
console.log(arr8.reverse())

//slice
var arr9=[10,"sachin",true,15.6789,"viart","y"]
console.log(arr9.slice(3))
console.log(arr9.slice(2,5))
console.log(arr9)//it will not alter original array

//splice
var arr10=[1,2,3,4,5,6,7,8,9]
console.log("original array before splicing"+arr10)
var splicedArr=arr10.splice(2,4)
console.log("spliced Array"+splicedArr)
console.log("orginal array after splicing"+arr10)

