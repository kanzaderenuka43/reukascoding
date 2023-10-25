// singleton
// object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Renuka",
    "full name: "Renuka patil",
    [mySym]: "mykey1",
    age: 22,
    location: "pune",
    email: "Renuka@google.com",
    isloggedIn: false,
    lastloginDays: ["Monday", "saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.email = "hitesh@google.com"
console.log(JsUser)
