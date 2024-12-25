const myArr= new Array(11,55,66,88,99)
const myArr1=['shru', 10,true,"rutu",20]
console.log("A", myArr1);

const newarr= myArr1.slice(1,3)
console.log(`slice array is ${newarr}`, newarr);

const newarr1= myArr1.splice(1,3)//splice array remove the part of slice array and gives remaining element list
console.log("c",myArr1);
console.log(`splice array is ${newarr1},`, newarr1);

