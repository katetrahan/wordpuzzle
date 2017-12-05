const reducer = (accumulator, currentValue) => accumulator + currentValue;

$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var sentence = $("#item1").val();
    var games = sentence.split("");
    console.log(games);
    // debugger;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var index = 0; index < games.length; index += 1) {
      for (var vindex = 0; vindex < vowels.length; vindex += 1) {
        if (games[index] === vowels[vindex]) {
          games.splice(index, 1, "-");
        }
      }
    }
    console.log(games);
    $("#sentinput").hide();
    $(".item1").text(games.reduce(reducer));
  });
});
