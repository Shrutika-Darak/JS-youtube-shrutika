const myArr= new Array(11,55,66,88,99)
const myArr1=['shru', 10,true,"rutu",20]
//console.log("A", myArr1);

const newarr= myArr1.slice(1,3)
//console.log(`slice array is ${newarr}`, newarr);

const newarr1= myArr1.splice(1,3)//splice array remove the part of slice array and gives remaining element list
//console.log("c",myArr1);
//console.log(`splice array is ${newarr1},`, newarr1);

//++++++++++++++++++++++ array Methods ++++++++++++++++

const fruit=["orange", "apple","banana"]
const juice=["orangejuice", "applejuice", "berryjuice"]

//console.log(fruit.concat(juice));
const myfruitjuice=fruit.concat(juice)
//console.log(myfruitjuice);

const fruitarr=[...fruit, ...juice]
//console.log(`... this is a spread opertaor it's behave same as concat ${fruitarr}`,fruitarr);

const anotherfruitarr=["watermelon","papaya","kharbuj"]

const num=[1,2,3,[4,5],6,[7,[8,9]]]
const newnum=num.flat(Infinity)
console.log(newnum);//[1, 2, 3, 4, 5,6, 7, 8, 9]

console.log(Array.isArray("shrutika"));//false
console.log(Array.from("shrutika"));//['s', 'h', 'r','u', 't', 'i','k', 'a']
console.log(Array.from({name:"Abhi"}));//[]

let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2));//[ 100, 200, 300 ]









