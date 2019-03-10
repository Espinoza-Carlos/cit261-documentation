/******************************
*Example 1
*******************************/
function myFunction1() {
  var x = document.getElementById("mySelect").value;

  document.getElementById("color").innerHTML = "You selected: " + x;
    if(x == "red")
    document.getElementById("color").style.color = "red";    
    if(x == "green")
    document.getElementById("color").style.color = "green";    
    if(x == "yellow")
    document.getElementById("color").style.color = "yellow";    
    if(x == "blue")
    document.getElementById("color").style.color = "blue";    
    
}

/******************************
*Example 2
*******************************/


function bigImg(x) {
  
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

/******************************
*Example 3
*******************************/

function myFunction2() {
  document.getElementById("touch").innerHTML = "MY first touch mobile p tag";
}

/******************************
*Example 4
*******************************/

function newElement(tag) {return document.createElement(tag);  }
function newText(text)   {return document.createTextNode(text);}
function newEvent(id, event, action) {getByID(id).addEventListener(event, action);}

function delElement(parent, child) {getByID(parent).removeChild(child);}
function delEvent(id, event, action) {getByID(id).removeEventListener(event, action);}

function getByID(id)        {return document.getElementById(id);          }
function getByClass(name)   {return document.getElementsByClassName(name);}
function getByTag(name)     {return document.getElementsByTagName(name);  }
function getBySelector(css) {return document.querySelectorAll(css);       }

function getInput(formName, inputName) {
  return document.forms.formName.inputName.value;
}

      // this will start the iniciation event
      window.onload = function() {
        // this will react with the Mouse Button
        newEvent("clicker", "mouseover", mouseOver);
        newEvent("clicker", "click", mouseClick);
        newEvent("clicker", "mouseout", mouseOut);
              };
            
      function mouseOver() {
        // text while animation
        var text = getByID("clickText");
        text.innerHTML = "After I am done growing click to appear another text";
        text.classList.add("grow");
        newEvent("clickText", "animationstart", statusIn);
        newEvent("clickText", "animationend", statusOut);
        // Responsiveness
        var button = getByID("clicker");
        button.classList.add("expand");
      }
      function statusIn() {
        getByID("clickStatus").innerHTML = "The text is growing.";
      }
      function statusOut() {
        getByID("clickStatus").innerHTML = "The animation is over";
      }
      function mouseClick() {
        // Celebration!
        var text = getByID("clickText");
        text.innerHTML = "Thank you for your participation " + '<br>' + "thank you for clicking the button";
        text.classList.add("strobe");
      }
      function mouseOut() {
        // Disappointment
        var text = getByID("clickText");
        text.innerHTML = "If you don't click nothing happend";
        text.classList.remove("grow", "strobe");
        getByID("clickStatus").innerHTML = "";
        // Responsiveness
        var button = getByID("clicker");
        button.classList.remove("expand");
      }
   