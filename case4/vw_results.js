"use strict";

//Minnesota Congressional Elections
var reportHTML = "<h1>" + raceTitle + "</h1>";

for (var i = 0; i < race.length; i++) {//loop through race for District
    var totalVotes = 0;
    //calculate total votes cast in current race
    votes[i].forEach(calcSum);

    reportHTML += "<table><caption>" + race[i] + "</caption>";
    //pass function for rows and display votes
    reportHTML += "<tr><th>" + candidateRows(i, totalVotes) + "</th><th>" + totalVotes + "</th></tr></table>";
}
//display by one and only for District report
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//function for each District row
function candidateRows(raceNum, totalVotes) {
    var rowHTML = " ";
    //counter variable j goes from 0-2 in steps of 1 unit
    for (var j = 0; j < 3; j++) {
        //create variables to display name,party,votes from vw_congminn.js file
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];;
        var candidateVotes = votes[raceNum][j];

        //calculating percentage of votes received by current candidate by call function
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        //display name,party,votes, and percent in 1 decimal place all not in bold
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td>";
        rowHTML += "<td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";

        /*adding colored bars for each party & percent to the race results table, with 1 cell for 
         every percentage point cast for the candidate*/
        for (var k = 0; k < candidatePercent.toFixed(0); k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";//end of row
    }
    return rowHTML;
}

/*Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate average percentage*/
function calcPercent(value, sum) {
   return (100*value/sum);
}

//displays the vote percentages as bar charts with length of the bar corresponding to percent value
function createBar(partyType) {
    var barHTML = " ";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
     return barHTML;
}
