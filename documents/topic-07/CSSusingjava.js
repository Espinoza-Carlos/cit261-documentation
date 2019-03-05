//Global objects containing CSS style values.
        var i = 0;
        var colors = ['blue', 'red', 'gold', 'orange', 'purple'];
        var fonts = ['Sans-serif', 'Verdana', 'Times New Roman', 'Courier New', 'Lucida Console'];
        var bgcolors = ['red', 'gold', 'green', 'purple', 'teal'];
        function changeColor() {
            if (i > colors.length) { i = 0; }
            document.getElementById("text").style.color = colors[i];
            document.getElementById("text").style.fontFamily = fonts[i];
            document.getElementById("text").style.backgroundColor = bgcolors[i];
            ++i;
        }

        function hideMe() {
            document.getElementById("text").style.visibility = "hidden";
        }
        function showMe() {
            document.getElementById("text").style.visibility = "visible";
        }
$( document ).ready(function() {
  $( ".js-click" ).click(function() {
    $( ".js-click" ).css('background', 'green');
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("p").css("color", "red");
  });
});

var button = document.querySelector('.button');

button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
