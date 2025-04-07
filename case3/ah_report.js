"use strict";

//will calculate the total amount of the donations
var donationTotal = 0.0;

//will calculate donation total for each one
donors.forEach(calcSum);

//total amount of donations is displayed with 1000s separator in the Donor Report
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr>";
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toString() + "</td></tr>";

//display donor table when complete
document.getElementById("donationSummary").innerHTML = summaryTable;

//used to show a list of the donors who contributed $1000 or more to Appalachian House 
var majorDonors = donors.filter(findMajorDonors);//passing function
majorDonors.sort(donorSortDescending);//sort in descending order

//will store the HTML code for the table of Major Donors
var donorTable = "<table><caption>Major Donors</caption>";
donorTable += "<tr><th>Donation</th><th>Donor ID</th>";
donorTable += "<th>Date</th><th>Name</th><th>Address</th>";
donorTable += "<th>Phone</th><th>E-mail</th></tr>";

//create HTML code for each donor row
majorDonors.forEach(writeDonorRow);//loop passing function
donorTable += "</table>";

//display major donors table when complete
document.getElementById("donorTable").innerHTML = donorTable;

//function that adds the current donation amount in the array to the donationTotal variable
function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

//function to find donations of $1000 or more
function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

//show Donations in descending order
function donorSortDescending(a, b) {
   return b[9] - a[9];
}

//show Donations in ascending order
function donorSortAscending(a, b) {
    return a[9] - b[9];
}

//A function that writes the HTML code for each table row that provides the contact information for the donor
function writeDonorRow(value) {//value num refer to ah_donors.js file
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

