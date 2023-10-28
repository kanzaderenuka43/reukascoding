function sayMyName(){
    console.log("R");
    console.log("E");
    console.log("N");
    console.log("u");
    console.log("k");
    console.log("A");
}
// sayMyName()
// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
// }
// addTwoNumbers(4, 3)  
function addTwoNumbers(no1, no2){
    let result = no1 + no2
}
const result = addTwoNumbers(3,6)
// console.log("result: ", result);

function loginUserMessage(username = "sam"){
if(!username){
    console.log("please enter a username");
    return
}
return `${username} just logged in`
}
// console.log(loginUserMessage("renuka"))

function calculateCartPrice( val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    uname: "renu",
    price: 333
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.uname} and price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    uname: "tanmay",
    price: 888
})

const myNewArray = [200, 300, 400, 700]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));