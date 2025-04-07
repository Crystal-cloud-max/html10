"use strict";

//calculate a running subtotal of the cost of the order
var orderTotal = 0.0;

//variable to display table
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//loop through each item info to show in the shopping cart table
for (var i = 0; i < item.length; i++) {
    //diplay current value from the arrays in tc_order.js file
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$" + itemPrice[i] + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";

    //calculate for current cost item for Total
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";//display Total cost for item
    //keeps a running subtotal of the total cost of customer order
    orderTotal += itemCost;   
}

//completes shopping cart table where Subtotal is value under table
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr></table>";

document.getElementById("cart").innerHTML = cartHTML;//show complete shopping cart