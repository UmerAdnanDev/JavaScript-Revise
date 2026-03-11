/*trusyvalue && value -> value
  falsyvalue && value -> falsevalue */
let Name = undefined;
let statement1 = Name && "Umer";
console.log(statement1);
Name = null
let statement2 = Name && "Umer"
console.log(statement2);
Name = true;
let statement3 = Name && "Umer"
console.log(statement3);
