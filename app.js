let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0;
let letterCounter = 0;
let yellowBlockPosition = 0;

sentences[sentenceCounter] //'ten ate neite ate nee enet ite ate inet ent eate
sentences[sentenceCounter][letterCounter] // 't'

$("#sentence").append(sentences[sentenceCounter]); // append first sentence onto page
$("#target-letter").append(sentences[sentenceCounter][letterCounter]); // append first character onto page
$("keyboard-upper-container").hide(); // hides upperCase keyboard

$(document).keydown(function (e) {
    //show uppercase board on shift press
    if(e.key == "Shift") {
        $("keyboard-lower-container").hide();
        $("keyboard-upper-container").show();
    } else {
        // console.log(e.key.charCodeAt(0));
        $("#" + e.key.charCodeAt(0)).css("background-color", "yellow"); // "f"

        yellowBlockPosition += 17.5;
        $("$yellow-block").css("left", yellowBlockPosition);

        if(e.key == sentence[sentenceCounter][letterCounter]) {
            $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>")
        } else (
            $("feedback").append(<"span class='glyphicon glyphicon-remove'></span>")
        )



        letterCounter++;

        $("#target-letter").append(sentences[sentenceCounter][letterCounter]);

        //check if current sentence is complete
        if(letterCounter == sentences[sentenceCounter].length) {
            
            if(sentenceCounter == sentences.length - 1) {
                console.log(("Game Over Man, Game Over!"))   

                
            } else {
            sentenceCounter++;
            letterCounter = 0;
            yellowBlockPosition = 20;
            $("#sentence").text(sentences[sentenceCounter]);
            $("#target-letter").text(sentences[sentenceCounter][letterCounter]);
            $("#feedback").empty();
            }
        } 
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

