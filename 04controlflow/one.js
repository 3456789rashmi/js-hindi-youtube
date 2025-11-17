// for(let i=0;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=0;j<=10;j++){
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i+'*' + j + '=' + i*j);
//     }
// }
let myarray = ["flash","batman","superman"]
for(let i=0;i<myarray.length;i++){
    const element = myarray[i];
    console.log(element);
}
let index = 0
while(index<=10){
    console.log(`value of index is ${index}`);
    index = index+2
}
let myarr = ['flash',"batman","superman"]
let arr=0
while(arr<myarr.length()){
    console.log(`value is ${myarr[arr]}`);
    arr = arr+1
}
let score = 1;
do{
    console.log(`score is $[score]`);
    score++;
}while(score<=10);
