"use strict";

//information about the game that will be displayed in the heml page for Dance Off VII
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID + "gameImg' />";
gameReport += "<table><tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;//display information for the game

//information from the customer ratings by calculating average customer rating of the game
var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratingsCount; i++) {
    //adding value of current ratings to the sum
    ratingsSum += ratings[i];
}

//display number for customer reviews on right side
var ratingsAvg = ratingsSum / ratingsCount;//division for average
var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

//display the content of the first 3 customer reviews
for (var i = 0; i < 3; i++) {//display customer review info from arrays of hg_product.js file
    ratingReport += "<div class='review'>";
    ratingReport += "<h1>" + ratingTitles[i] + "</h1><table>";
    ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
    ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
    ratingReport += "<tr><th>Rating</th><td>";

    //loop for each customer to rate the game on a scale of 1-5 stars displayed graphically
    for (var j = 0; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }

    //display array for summary after table
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";

    //display customer rating report box when complete
    document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
}
