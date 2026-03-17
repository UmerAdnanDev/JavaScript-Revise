/*JSON: javascript object notation is a js object but with less features
 for instance it can't have functons in it and both values and properties are inclosed within
 notations '' it helps in transfering data between two computers irrespective of the programming language*/

//converting js object to json
console.log(JSON.stringify(product));
console.log(typeof JSON.stringify(product)); //string
console.log(JSON.parse(JSON.stringify(product)));
console.log(typeof JSON.parse(JSON.stringify(product)));//object
const obj1 = { txt:"Text"}
const obj2 = { txt:"Text"}
console.log(obj1 === obj2);//false as references are compared memory address
const obj3 = obj1 // now they have same references
console.log(obj1 === obj3);
let text = obj1.txt;
let {txt} = obj1; // destructuring 
console.log(txt);
console.log(text)
let obj4 = {
  a:"a",b:"a",
  method(){ console.log("This is a short hand method")}
  ,txt
}
let {a,b} = obj4;
console.log(a);
console.log(b);
obj4.method()
console.log(obj4.txt) //-> Text