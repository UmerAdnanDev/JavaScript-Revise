// A reusable block of code
function function$_1(){
    console.log("This is a function")
}
function$_1()
function function2(Name,age){ //parameters
  console.log(`My name is ${Name} & I am ${age} year old.`)
}
function2("Ali",19) //arguments
function2() //values are undefined
function2(19,"Ali")
function2(age = 12,Name = "Adnan")
function sqrt(num){
  return num**2
}
console.log(sqrt(6)) // -> 36
console.log(sqrt()); // -> NaN
function cube(num){
  return num**3
}
console.log(cube(6))
function discountedAmount(amount,discount){
   return amount - (amount*discount/100)
}
console.log(`Amount 180$ and discount 22% , final amount: ${discountedAmount(180,22)}`)
// for each helps in looping through an array
array = ["a","b","c"].forEach(function(value,index = 1){console.log(index+=1,". ",value);
});
