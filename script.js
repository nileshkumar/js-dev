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
