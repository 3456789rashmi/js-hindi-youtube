const mysym = Symbol("key1");
const Jsuser = {
    name : "Rashmi",
    [mysym]:"key2",
    location : "punjab",
    email : "rashmi@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["name"]);
// console.log(Jsuser[mysym]);
// Jsuser.email = "rash@gnail.com";
// // Object.freeze(Jsuser);
// Jsuser.email = "rashm@gmail.com";
// // console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());