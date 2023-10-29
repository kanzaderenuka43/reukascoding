const user = {
    uname: "renu",
    price: 999,
    welcomeMesg: function(){
        console.log(`${this.uname}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMesg()
// user.uname ="tanu"
// user.welcomeMesg()
// console.log(this)

// function chai(){
//     let uname = "renu"
//     console.log(this.uname)
// }
// chai()

// ++++++++++++++++++

// const chai = function(){
//     let uname = "raj"
//     console.log(this.uname)
// }

const chai = () => {
    let uname = "raj"
    console.log(this)
}
// chai()
// Implicit
// const addnum = (num1, num2) =>  (num1 + num2)
const addnum = (num1, num2) =>  ({uname: "anita"})
// console.log(addnum(3, 8))

// const myArr = [2, 4,6,8, 9]
// myArr.forEach()