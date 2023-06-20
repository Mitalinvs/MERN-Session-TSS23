// ! Template Literals
let name= `Mitali`;
//Old method
let para= `I am `+name; 
para= `I am ${name}`;   //Interpolation
console.log(para);

// ! Arrow Functions

// Simple function
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(2,3));

// Arrow function
//()=>{}
let add= (a,b) => a+b
console.log(add(2,3));


// ! Destructing
let names= ["Sahib", "Rahul", "Aday"]

// Destructing Array
let [name1,name2,name3]= names
console.log(name1, name2, name3)

// Destructing Object
let vehicle= {
    model: "Ford",
    nameOfvehicle: "Mustang"
}
let {model,nameOfvehicle}= vehicle
console.log(model, nameOfvehicle)


// ! Spread Operator(...)
let names1= ["Sahib", "Rahul", "Aday"]
let names2= ["Mitali", "Pari"]
//Nested array
//let names3= [names1, names2]
//Elements of array are spread
let names3= [...names1, ...names2]
console.log(names3)