// 
// let  myCreateDate = new Date(2023,0,23)
// let  myCreateDate = new Date(2023,0,23,5,4)
// let  myCreateDate = new Date("01-14-2023")
let  myCreateDate = new Date("01-14-2023")

// console.log(myCreateDate.toLocaleDateString())
// console.log(typeof myCreateDate)
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday:"long"

})




