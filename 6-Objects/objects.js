let Employee1 = {
    Name: "Hassan Rashid",Salary:150000,currency:"PKR"
    ,experience:"2yrs" //property:value
}
function EmployeeDetails(Employee){
 console.log(Employee);
 console.log(`Employee Details:`);
 console.log(`Name:${Employee.Name}`);
 console.log(`Experience:${Employee.experience}`)
 console.log(`Salary:${Employee.Salary} ${Employee1.currency}`)
 console.log();
}
EmployeeDetails(Employee1)
//access values
Employee1.Name // dot notation
Employee1['name'] // bracket notation
//changing values
Employee1.Name ="Saniya Quraishi"
Employee1.Salary =10000
Employee1.experience = "1yr"
EmployeeDetails(Employee1)
// adding new properties
Employee1.company = "UsJ Corp"
console.log(Employee1.company);
//access a property which doesn't exists
console.log(Employee1.gender); // -> undefined
// deleting property
delete Employee1.company 
console.log(Employee1.company);//undefined

// Bracket Notation
let object1 = {
  ['name'] : "WaterBottle" , "Capacity":"1.2 liters","color":"transparent",'cost':23
};
console.log(object1['name'])
console.log(object1['cost'])
//nested objects and functions
let product = {
  Name : "Shoes Xj4",
  rating:{ rate:4.75 , total_rated:5} ,//object in an object
  detail: function info(){
    console.log(`--Product Detail--`);
    console.log(`Name: ${product.Name}`);
    console.log(`Rating: ${product.rating.rate}`);
    console.log(`Times Rated: ${product.rating.total_rated}`);
    
     // a function inside an object is called a method
    
  }
}
console.log( typeof product);
console.log(typeof product.detail())
console.log(product.rating.rate);
console.log(product.detail());

