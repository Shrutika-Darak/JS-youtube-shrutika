let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let mytime= Date.now()
// console.log(mytime);
// console.log(mytime.log);
// console.log(mytime.toPrecision(1));
// console.log(mytime.toFixed(2));
// console.log(mytime.now);
// console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getDate());


console.log(`Today's date is ${myDate.getDate()} and hours is ${myDate.getHours()}`);

myDate.toLocaleString('default',{
    weekday:"short"
})
console.log(myDate); //2024-12-25T14:30:51.292Z




 











