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
