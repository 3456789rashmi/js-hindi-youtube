const mysum = Symbol("key1");
const jsuser = {
    name:'abc',
    [mysum]: "mykey1",
    age:14,
    location:"Haryana",
    email:"sahsdn@gmail.com",
    isloggedin:false,
    lastloogedin:["Monday","Tuesday"]
}
console.log(jsuser.email);
console.log(jsuser[mysum]);
// Object.freeze(jsuser);
jsuser.email = "hsjduwsdhu@gmail.com";
// console.log(jsuser);
jsuser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsuser.greeting());
jsuser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(jsuser.greeting2());
