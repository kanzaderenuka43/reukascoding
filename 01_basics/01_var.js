const accountId = 144553
let accountEmail = "renuka@gmail.com"
var accountPassword = "123"
accountCity = "pune"
let accountState
// accountId = 2 not allowed
console.log(accountId);
accountEmail = "as@gmail.com"
accountPassword = "232"
accountCity = "nanded"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/