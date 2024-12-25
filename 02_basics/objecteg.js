// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Shruti",
    "full name": "Shrutika Darak",
    [mySym]: "mykey1",
    age: 24,
    location: "abad",
    email: "shru@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shruti@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shruti@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function abc(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`your age is ${this.age}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());