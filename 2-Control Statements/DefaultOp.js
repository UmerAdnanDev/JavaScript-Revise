/*trusyvalue || value -> trusyvalue
  falsyvalue || value -> value */
let Name = "Umer";
let statement1 = Name || "No name";
console.log(statement1);
Name = null
let statement2 = Name || "No name"
console.log(statement2);
Name = true;
let statement3 = Name || "Umer"
console.log(statement3);
