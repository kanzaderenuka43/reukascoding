// Primitive
// 7 types:String,number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNum = 47587878675876n



// Reference type(Non primitive):
// Array,Objects,Functions

const heros = ["shaktiman", "naggraj","doga"];
let myObj = {
    name = "renuka",
    age = 44,
    }
    const myFunction = function(){
        console.log("Helo World")
    }
    console.log(typeof scoreValue);
    console.log(typeof myFunction)
    

