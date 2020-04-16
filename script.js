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
