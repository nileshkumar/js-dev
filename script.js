//function definition
function showMessage(msg){
  document.getElementById("message").textContent = msg;
}

showMessage("Discount");

//declare variable using let
let price = 12.5,
    tax = 10;

showMessage(price+tax);

showMessage(typeof price);

showMessage(++price);

price += tax;

showMessage(price);

showMessage(price++);
console.log(price);

//string with back-tick

let name = "Pina";
let message = `Hello ${name}`;

showMessage(message);

//objects & Symbols

let person = {
      firstName: "John",
      lastName: "Mayer"
};
showMessage(`${person.firstName}` + ` ${person.lastName}`);


// comparison operator

let a = 1.1,
    b = 1.3;

showMessage(a+b === 2.4);

//to fix the floating point comparison
showMessage(+(a+b).toFixed(2) === 2.4);


//function experession
let myfuncton = function logMessage(){
  console.log("loging the message");
}
myfuncton();  // calling the function

//function returning values

function getCode(value){
  let code = value * 2;
  return code;
}
let showCode = getCode(10);
showMessage(showCode);

//nested function & scope

let key = 25;
function generateCode(value){

  let getCode = function(){
    let key = 50;
    console.log("in getCode " + key);
    return key;
  }

  let showCode = value * getCode();
    console.log("showCode " + key);
    return showCode;

}

let code = generateCode(5);
showMessage(code);

//object method
let model = {
      firstName: "Maria",
      lastName: "Merry",
      age: 25,
      showInfo: function(){
        showMessage(this.firstName +' is '+ this.age);
      }
};
model.showInfo();

//passing objects to a function
let student = {
  name: "Sham",
  age: 25
};

function incrementAge(student){
  student.age++;
}
incrementAge(student);

showMessage(student.age);

//styling DOM elements
const msg = document.getElementById("message");
msg.style.color = "blue";
msg.style.fontWeight = 100;

/*########## slice vs splice #############################*/
//The slice() method returns a shallow copy of a portion of an array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals); //no changing in original array

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding
//new elements in place.
/* Delete elements*/
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)
console.log(removed);
console.log(myFish);
myFish.splice(2, 0, 'jelly fish');
console.log(myFish); //original array changed

/************************* Array searching & looping **********************************************/

//indexOf()
const values = ['a', 'b', 'c', 'd']
console.log(values.indexOf('b'));
console.log(values.indexOf('e'));

//filter()
const numbers = [12, 35, 46, 10]
const set = numbers.filter(function(item){
  return item < 46;  //returns an array
});
console.log(set);

//find()
let ages = [25, 29, 20, 35, 30];
let found = ages.find(function(age){
  return age > 25; //returns first occurance
});
console.log(found);

//foreach()
const letters = ['a', 'b', 'c', 'd']
letters.forEach(function(letter){
  console.log(letter);
})
