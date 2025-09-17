//Date Object
//when ever we need to know about the date we should use date
//object gives information regarding Day, Month, Year, Minutes, Hours, Seconds, and Time Zone
//months--->0-->jan  11-->dec
//week--->0-->sunday 6-->saturday

var date = new Date()
console.log(date)

//Methods of date object
//1. getDate() method is used to get the current date
var currentDate = date.getDate()
console.log(currentDate)

//2. getMonth() is used to get the current month
//note month always starts from 0
var month = date.getMonth()
console.log(month)

//3. getDay() is used to get the current day
var day = date.getDay()
console.log(day)

//4. getFullYear() method is used to print current year
var year = date.getFullYear()
console.log(year)

//5. getHours() method is used to print current hour
var hour = date.getHours()
console.log(hour)

//6. getMinutes method is used to print current minutes
var minute = date.getMinutes()
console.log(minute)

//7. getSeconds method is used to print current seconds
var second= date.getSeconds()
console.log(second)