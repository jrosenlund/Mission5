// Calculator functionality
$("#btnCalculate").click(function () {
    let cost = 0;

    // Get user input
    let numHours = $("#numHours").val();
    let needLEGO = $("#needLEGO").is(":checked");

    // Calculate cost based on hours
    if (numHours < 1) { // Must be at least 1 hour
        $("#numHours").val("");
        $("#quote").html("");
        alert("Please enter a number between 1 and 10");
    }
    else if (numHours > 10) { // No more than 10 hours
        $("#numHours").val("");
        $("#quote").html("");
        alert("That's too long! Please enter a number between 1 and 10");
    }
    else {
        if (numHours < 4) {
            cost = numHours * 30;
        }
        else if (numHours < 7) {
            cost = numHours * 27;
        }
        else {
            cost = numHours * 25;
        }

        // Add possible cost of providing LEGOs for client
        if (needLEGO == true) {
            if (numHours < 3) {
                cost = cost + 20;
            }
            else if (numHours < 7) {
                cost = cost + 30;
            }
            else {
                cost = cost + 40;
            }
        }

        // Update quote box in cost table
        $("#quote").html("$" + cost);
    }
});