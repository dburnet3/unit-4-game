

var wins = 0; //this is to keep track of wins
var losses = 0; //this is to keep track of losses
var sum = 0;//this is to keep track of the sum
var crystalValues = []; //this is my array where I'm storing my randomly generated crystal values
var randomNumber = Math.floor(Math.random() * 120) + 19;  //Randomly generate a value for my target and display it on the webpage


$("#random_number").append(randomNumber);

//Creating a for loop to check the users value after they've clicked on the crystals 4 times.
//Randomly generating at least 4 values in my crystalValues array.
for (var i = 0; i < 4; i++) {
    crystalValues.push(Math.floor(Math.random() * 12) + 1);
}

console.log(crystalValues);
//When the user clicks on the diamond then we'll run this function:
//declare variable called crystal and assign the value of this to the crystal ID
$(".diamond").click(function () {
    var crystalID = +$(this).data("crystal");
    sum += crystalValues[crystalID];

    $("#total_score").html(sum);

    if (sum === randomNumber) {
        alert("you won");
        wins++;
        $('.wins').html(wins);
        $("#random_number").empty();
        $("#total_score").empty();
        sum = 0;
    } else if (sum > randomNumber) {
        alert("you lost");
        losses++;
        $('.losses').html(losses);
        $("#random_number").empty();
        $("#total_score").empty();
        sum = 0;
    }

})

//I had a hard time trying to figure out how to reset my randomly generated values.  Everytime I placed them in a function
//nothing would show up in my div tags.  
$(".playAgain").on("click", function () {
    //update the target random number
    randomNumber = Math.floor(Math.random() * 120) + 19
    $("#random_number").append(randomNumber);


    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.floor(Math.random() * 12) + 1);
    }


})