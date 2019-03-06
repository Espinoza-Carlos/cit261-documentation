var myVideo = document.getElementById("videojava"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
function erase(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function trigcanvas() { 
        var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
ctx.clearRect(20, 20, 100, 50);    
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
} 
function trigCircle(){
    var a = document.getElementById("myCanvas");
var ctx = a.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

}

function erase(){
    var b = document.getElementById("myCanvas");
//var ctx = b.getContext("2d");
var reset = b.getContext("2d");
    reset.clearRect(0, 0, 250, 250);
    reset.fillStyle = "#000000";
}

function text(){
    var d = document.getElementById("myCanvas");
var ctx = d.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);
}