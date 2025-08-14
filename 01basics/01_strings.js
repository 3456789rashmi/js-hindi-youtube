// const name = "Rashmi";
// const repocount = 40;
// console.log(name + repocount + "value");
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// const otherNumber = 134.133435;
// console.log(otherNumber.toPrecision(3));
let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
newdate.toLocaleString('default',{
    weekday:"long",
})