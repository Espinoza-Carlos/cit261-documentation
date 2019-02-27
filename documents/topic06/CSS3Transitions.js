
one.onclick = function() {
	changeStoplight();
	var loop = setInterval(changeStoplight, 10000);
}

function changeStoplight(){
	
	doc.getElementById("one").style.background = "red";
	doc.getElementById("three").style.background = "black";
	doc.getElementById("rocket").className = "";

	setTimeout(function(){ 
		doc.getElementById("one").style.background = "black";
		doc.getElementById("two").style.background = "yellow";
	}, 3000);

	setTimeout(function(){ 
		doc.getElementById("two").style.background = "black";
		doc.getElementById("three").style.background = "green";
		doc.getElementById("rocket").className = "move";
	}, 6000);
}

loadButton.onclick = function() {
	loader.className = "increase";
	setTimeout(function(){ 
		loadedImg.style.display = "block";
	}, 7000);
}