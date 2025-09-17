console.log(5=="5")  // true because == performs type conversion, so "5" (string) becomes 5 (number).
console.log(5==="5")  // false because === checks both type and value; 5 (number) is not the same type as "5" (string).
console.log(5>3)      // true because 5 is greater than 3.
console.log(null==0)  // false because null is only loosely equal to undefined, not 0.
console.log(null===undefined) // false because null (object) and undefined (undefined type) are not strictly equal.
console.log(5<=5)     // true because 5 is less than or equal to 5.
console.log([]==0)    // true because [] (empty array) is converted to an empty string, which is then converted to 0 in comparison.
console.log(13!==13)  // false because both value and type are identical.
console.log(undefined==0)     // false because undefined is not loosely equal to 0.
console.log(undefined===0)    // false because types are different.
console.log("2">1)   // true because "2" is converted to the number 2.
console.log("02">1)  // true because "02" is converted to the number 2.

/*
Output:
true
false
true
false
false
true
true
false
false
false
true
true
*/