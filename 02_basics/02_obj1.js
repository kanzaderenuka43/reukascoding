const mySym = Symbol("key1")
const JsUser = {
    name: "Renuka",
    "full name": "Renuka Patil",
    [mySym]: "mykey1",
    age:22,
    email: "Renuka@google.com",
    location: "Pune",
   
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
    console.log(JsUser[email])
    console.log(JsUser["full name"])
    console.log(JsUser["mySym"])