const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 2)
// console.log(myTotal)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal)

const shopCart = [
    {
        itemName: "\njs course\n",
        price: 2999
    },
    {
        itemName: "py course\n",
        price: 999
    },
    {
        itemName: "mobile dev course\n",
        price: 5999 
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shopCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay)