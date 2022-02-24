$("keyboard-upper-container").hide();

$(document).keydown(function (e) {
    if(e.key == "Shift") {
        $("keyboard-lower-container").hide();
        $("keyboard-upper-container").show();
    } else {
        // console.log(e.key.charCodeAt(0));

        $("#" + e.key.charCodeAt(0)).css("background-color", "yellow"); // "f"

    }
});

$(document).keyup(function (e) {
    if(e.key == "Shift") {
        $("keyboard-lower-container").show();
        $("keyboard-upper-container").hide();
    } else {
        $("#" + e.key.charCodeAt(0)).css("background-color", "yellow"); 
    }
});

