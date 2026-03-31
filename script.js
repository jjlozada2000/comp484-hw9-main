// Part 1: Date Display

let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

let dateMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;


// Part 2: Number Conversion Tests

let val1 = "49.99";
let val2 = "15";
let val3 = "hello";
let val4 = "8.5";

let converted1 = Number(val1);
let converted2 = Number(val2);
let converted3 = Number(val3);
let converted4 = Number(val4);

let result1 = "Original: '" + val1 + "' → Converted: " + converted1 + " → isNaN: " + Number.isNaN(converted1) + " → isInteger: " + Number.isInteger(converted1);
let result2 = "Original: '" + val2 + "' → Converted: " + converted2 + " → isNaN: " + Number.isNaN(converted2) + " → isInteger: " + Number.isInteger(converted2);
let result3 = "Original: '" + val3 + "' → Converted: " + converted3 + " → isNaN: " + Number.isNaN(converted3) + " → isInteger: " + Number.isInteger(converted3);
let result4 = "Original: '" + val4 + "' → Converted: " + converted4 + " → isNaN: " + Number.isNaN(converted4) + " → isInteger: " + Number.isInteger(converted4);

let nanMessage = "";
if (Number.isNaN(converted3)) {
  nanMessage = "<p class='error-msg'>\"hello\" is not a valid number and cannot be used in calculations.</p>";
} else {
  nanMessage = "<p>All values are valid numbers.</p>";
}

let intMessage = "";
if (Number.isInteger(converted2)) {
  intMessage = "<p class='success-msg'>\"" + val2 + "\" converted to a whole number: " + converted2 + "</p>";
} else {
  intMessage = "<p>\"" + val2 + "\" is not an integer.</p>";
}

document.getElementById("numberConversionOutput").innerHTML =
  "<p>" + result1 + "</p>" +
  "<p>" + result2 + "</p>" +
  "<p>" + result3 + "</p>" +
  "<p>" + result4 + "</p>" +
  nanMessage +
  intMessage;


// Part 3: Price Calculator

let itemPrice = 49.99;
let taxRate = 0.095;
let shippingCost = 5.99;

let taxAmount = itemPrice * taxRate;
let subtotal = itemPrice + shippingCost;
let total = subtotal + taxAmount;

let formattedTax = taxAmount.toFixed(2);
let formattedTotal = total.toFixed(2);
let formattedSubtotal = subtotal.toFixed(2);

document.getElementById("mathOutput").innerHTML =
  "<p>Item Price: $" + itemPrice + "</p>" +
  "<p>Shipping: $" + shippingCost + "</p>" +
  "<p>Subtotal (before tax): $" + formattedSubtotal + "</p>" +
  "<p>Tax (9.5%): $" + formattedTax + "</p>" +
  "<p><strong>Total: $" + formattedTotal + "</strong></p>";