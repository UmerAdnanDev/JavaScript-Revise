hi() // hoisting
function hi(){
  console.log('hi');
  
}
// the functions which are declared in the above manner
// allow hoisting meaning they can be called prior to being declared can't be done with variable ones
let f1 = function hi(){ //hi() can be removed
  console.log("Hi1");
}
let f2 = function(){
  console.log("Hi2");
  
}
console.log(f1);
console.log(typeof f1);

f1() //calls the function
f2()
// passing functions to objects
let obj1 = {
  num:2,
  func:function(){
    console.log("hello from function");
  }
};
console.log(obj1.num);
obj1.func()
//passing func into func(func passed is called a callback)
function runf(f){ f() };
function print(a = "Empty"){ console.log(a)}
runf(print)
print("Hello World")
setTimeout(function f(){console.log("Hi after 5 seconds"); // declare the function here don't call
},5000) //time in miliseconds 1 sec = 1000 mls
print("hi")
// setTimeout is asyncronus meaning
// hi will print first then after 5 s the function is called
setInterval(function again(){console.log("hi again!")},3000);//executes after every 3 seconds
