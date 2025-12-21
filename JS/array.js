let numbers = [1,2,3,4,5,6,];

const even= numbers.filter((e)=>{
    return e%2==0;
})
console.log(even);

let multwo = numbers.map((e)=>{
   return e*2
})
console.log(multwo);

let sum = numbers.reduce((total ,value)=>{
    return total = total+value;
})
console.log(sum)

const prices = [100, 200, 300, 400];

const discountedprice = prices.map(e=>e*0.1);
console.log(discountedprice);

const abovetwo = prices.filter(e=>e>200);
console.log(abovetwo);

const sumprice = prices.reduce((total,value)=>total+value,0);
console.log(sumprice);

const users = [
  { name: "Ram", age: 20, active: true },
  { name: "Shyam", age: 17, active: false },
  { name: "Hari", age: 25, active: true }
];

const activeuser = users.filter(u=>u.active);
console.log(activeuser);

const name = users.map (u=>u.name);
console.log(name);

const firstminor = users.find(u=>u.age<18);
console.log(firstminor);

