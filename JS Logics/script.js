// create names array
const names = ["rajendra", "ramesh", "shyam", "mohan"];

//                  forEach()

// use forEach method which is the one of the method of an array that takes function as an argument and that function will get executed for each of the element of an array. Plus forEach method will give value as an argument to that function

// option 1 to define function using function keyword
names.forEach(function (name) {
  console.log(name);
});

// option 2 to define function aka arrow function
names.forEach((name) => {
  if (name == "rajendra") {
  } else {
    console.log(name);
  }
});

// create an fruits arrya
const fruits = ["apple", "mango", "banana", "orange", "grapes"];

//                  map()

// map method is used in such situation where we want to create new array of same no of elements as that of previous array using the previous array

// map() simply create empty array plus execute the function which is inside map() for the number of times equivalent to number of elements in the previous array
// NOTE: we need to store the new array created by map() in a variable

const newArr = fruits.map(function (fruit) {
  return 1;
  // here for each element to previous array this funciton will get executed and return value 1 on each execution to new array created by map method
});

console.log(newArr);

const editedFruits = fruits.map(function (fruit) {
  return fruit + " tasty";
});

console.log(editedFruits);

//        filter()
// filter() also make an empty array but the number of elements inside that array will totally depend on the return value of the function inside the filter() i.e. if the return statement is true for the current value then that value will be returned to the new array otherwise not

// so if we use filter() in the existing array then the number of elements in the new array created by fileter() will be less or equal to the number of elements present in the existing array

// so filter() will be used in such situation when we want to filter the existing array and store the filtered value in the new array
const vegetables = ["carrot", "ginger", "onion", "tomato", "potato"];

const filteredVegetables = vegetables.filter(function (vegetable) {
  if (vegetable == "onion") return true;
  return false;
});

console.log(filteredVegetables);

const items = [
  "pencil",
  "book",
  "laptop",
  "bag",
  "hat",
  "bat",
  "mouse",
  "monitor",
];
// now filter the above items and return only that item whose spelling start with m.

const filteredItems = items.filter(function (item) {
  if (item.startsWith("m")) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredItems);

// now filter the above items and return only that item whose spelling start with p.

const filteredItems2 = items.filter(function (item) {
  // here the whole statement item.startWith("p") will be true so inside the if statemen will get executed
  if (item.startsWith("p")) return true;
});

console.log(filteredItems2);

// now filter the above items and return only that item whose spelling start with b.

const filteredItems3 = items.filter(function (item) {
  // here whole statment item.startsWith("b") will be true so the current value will be returned inside the new array
  return item.startsWith("b");
});

console.log(filteredItems3);

//        destructuring

//        destructuring of array

const actors = [
  "tom cruise",
  "robert downy jr",
  "henry kalvin",
  "mark ruffalo",
  "chris hamesworth",
  "chris evans",
];
// now if we want to get the first three value of an array then we create variables inside the array to store those values
let [firstActor, secondActor, thirdActor] = actors;
console.log(
  `first-actor=>${firstActor} second-actor=>${secondActor} third-actor=>${thirdActor}`
);

// now if we want to destructure the last element from the existing array then we put , for each index until we reach to the last index of the existing array

// destructuring of an array is done by delaring variabls inside the [] bracket (aka empty array)

let [, , , , , r] = actors;
console.log(r);

//          destructuring of an object

const person = {
  id: 1,
  name: "ram gautam",
  address: "bkt",
  age: 24,
  contact: {
    mobileNo: 1234,
    phoneNo: 3344,
  },
  email: "ram@gmail.com",
};

// now if we want to destructure the mobileNo key from the above object then we takeoff that key as follows

const { mobileNo } = person.contact;
console.log(mobileNo);

// if we want id and name of person object then we can easily extract those key out of that object like below

// destructuring of object is done by mentioning it's key inside the {} bracket (aka empty object)

let { id, name } = person;
console.log(id, name);

//          spread operator (...)

// Problem: if we try to copy the existing array then instead of copying it's value it's reference will get copied

const arr1 = [1, 2, 3, 4];
const arr2 = arr1; //here arr2 variable hold  reference of arr1 not value of arr1
console.log(arr1);
console.log(arr2);

// now if we update value of arr2 then it also effect value of arr1 and vice versa because they both share the same reference

arr2.push(22);
console.log("values of arr1 after push operation on arr2:", arr1);
console.log("values of arr2 after push operation on arr2:", arr2);

arr1.pop();
arr1.pop();
console.log("values of arr1 after two times pop operation on arr1:", arr1);
console.log("values of arr2 after two times pop operation on arr1:", arr2);

// same problem goes to object

const obj1 = { name: "ramkumar", address: "ktm" };
const obj2 = obj1;

console.log(obj1);
console.log(obj2);

// updating obj1
obj1.name = "mahesh";

console.log("values of obj1 after updating name key in obj1", obj1);
console.log("values of obj2 after updating name key in obj1", obj2);

// adding new key in obj2
obj2.age = 44;

console.log("values of obj1 after adding new key in obj2", obj1);
console.log("values of obj2 after adding new key in obj2", obj2);

// so here both the arrays or the objects get effected when we update any one of the array or object

// NOTE: to solve above we use spread operator ... Spread operator helps to copy the values of an array or object instead of copying its reference value

const oldAnimalArr = ["cat", "dog", "elephant"];

// to copy value of an old array into new array we used spread operator ... inside the [] bracket which is followed by the name of an old array  as follow
const newAnimalArr = [...oldAnimalArr];

console.log(oldAnimalArr);
console.log(newAnimalArr);

// now if we update the oldAnimalArr it will not effect the newAnimalArr because this time they will not share the same reference value like before and this happens due to the use of spread operator ...

oldAnimalArr.push("giraffe");
console.log("values of oldAnimalArr after push operation", oldAnimalArr);

newAnimalArr.pop();
console.log("values of newAnimalArr after pop operation", newAnimalArr);

// same concept goes to object but while using spread operator ... for object we need to insert ... inside {} bracket followed by name of an old object

const oldObj = { color: "red", speed: 260 };
const newObj = { ...oldObj };

console.log(oldObj);
console.log(newObj);

// now update oldObj there will be no effect in newObj
oldObj.version = 2025;
console.log("values of oldObj after adding one more key", oldObj);

// remove some property from newObj for this delete operator will be used
delete newObj.speed;
console.log("values of newObj after deleting one key", newObj);

//          rest operator (...)
// here rest operator is used to copy value of parameters into the new array

function exampleOne(...items) {
  // here ... is rest operator followed by variable name and this operator create new array named by items and copy those values which are passed as a parameters when function get invoked into the created array
  console.log(items);
}

exampleOne("airpod", "mobile");

// exmple that shows used of rest operator along with other arguments

function exampleTwo(value1, value2, ...restValues) {
  // here first two arguments hold first two parameters and the remaining parameters will be store in an array named by restValues because of  rest operator
  console.log(value1, value2, restValues);
}

exampleTwo(1, 2, 3, "ram", "shaym", "gita");

// qn 1 Merging two arrays of data fetched from searate APIs into a single list.

const firstNames = ["hari", "mohan", "gita", "rita"];
const lastNames = ["thapa,", "bk", "ghimire", "gautam"];

// getting values of both the arrays in single array
const firstNamesAndLastNames = [...firstNames, ...lastNames];
console.log(firstNamesAndLastNames);

// qn 2 filtering an array of objects to display items based on a search query(e.g., filtering products by its price ).

const products = [
  { name: "biscuits", price: 10 },
  { name: "noodles", price: 20 },
  { name: "rice", price: 100 },
  { name: "wheat", price: 200 },
  { name: "chocolate", price: 20 },
];
console.log(products);

// applying filter() to an array of objects
const newProducts = products.filter(function (product) {
  // here if product.price==20 is equal to true boolean then value hold current product variable will be returned to new arrays
  return product.price == 20;
});

console.log(newProducts);

// qn 3 mapping over an array of user data to create a list of user cards.
// this qn says create div for each element of an array

// array of user data
const users = [
  { name: "vhim", age: 24, address: "ktm" },
  { name: "mohan", age: 20, address: "makwanpur" },
  { name: "ghanshyam", age: 12, address: "rupendehi" },
  { name: "jagaran", age: 18, address: "baramchi" },
];

// map() to users array
const arrayOfUserDiv = users.map(function (user) {
  return `<div><h1>${user.name}</h1><h2>${user.age}</h2><h3>${user.address}</h3></div>`;
});

console.log(arrayOfUserDiv);

// qn 4 grouping of an array of objects by a specific property (e.g., grouping of users by role).

/* above qn say group the member of an array based on role like this 

{
admin:[members of existing array whose role is admin],
user:[members of existing array whose role is user]
}

*/

const userOfPC = [
  { name: "sandesh", role: "admin" },
  { name: "sankar", role: "user" },
  { name: "anita", role: "user" },
  { name: "sarita", role: "admin" },
];

// above qn ans is given in following steps

// step 1: create empgy object
let qn4Obj = {};

// step 2: apply forEach loop to array of users of pc

userOfPC.forEach(function (user) {
  // here we check if qn4Obj contains keys(fields) named by admin or user
  if (qn4Obj[user.role]) {
    // here we push user object to that key
    qn4Obj[user.role].push(user);
  } else {
    // here we assign empty array to the admin and user key of current user object
    qn4Obj[user.role] = [];
    // push user object to the empty array
    qn4Obj[user.role].push(user);
  }
});

// now the qn4Obj which we created as an empty object will contains admin key and user key whose value will be an array of object whose role is admin and user respectively

console.log(qn4Obj);

//qn 5 removing or updating a specific object in an array of user based on a unique ID
// this qn simply says remove specific object from the array of ojects through the help of it's id

const qn5Obj = [
  { id: 1, name: "ram" },
  { id: 2, name: "ramesh" },
  { id: 3, name: "rakehs" },
  { id: 4, name: "rabindra" },
];

// to solve above qn we use filter() on above object
const arrayWithFilteredUsers = qn5Obj.filter(function (user) {
  return user.id !== 3;
  // here object with id 3 will not be returned to the array created by filter() other objects will return to that array
});

console.log(arrayWithFilteredUsers);
