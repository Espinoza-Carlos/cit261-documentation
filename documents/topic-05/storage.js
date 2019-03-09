function store() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function clickReset() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = 0;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have erased the count to " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

/******************************
*Example 2
*******************************/
function limitedStorage() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result2").innerHTML = '<b>' +"You have clicked the button " + '</b>' + sessionStorage.clickcount + " time(s) in this session.";
  } else {
    document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

/******************************
*Example 3
*******************************/


document.getElementById('form').addEventListener('submit', save);
var stored;
function save(e) {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;

    let list = {
        name: name,
        lastName: lastName
    };


    if (localStorage.getItem('listItems') === null) {
        let listItems = [];
        listItems.push(list);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    } else {
        let listItems = JSON.parse(localStorage.getItem('listItems'));
        listItems.push(list);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }

    getData();

    e.preventDefault();
}

function getData() {
    let listItems = JSON.parse(localStorage.getItem('listItems'));
    let results = document.getElementById('output');

    results.innerHTML = '';

    for (let i = 0; i < listItems.length; i++) {
        stored = listItems.length;
        let name = listItems[i].name;
        let lastName = listItems[i].lastName;

        results.innerHTML += '<hr>' + '<div >' +
            '<P>' + '<b>' + "Name: " + '</b>'+'</P>' + name  +
            '<p> <span> </span> ' + '<b>' +"Last Name: " + '</b>'+ lastName + '</p>' + '<hr>' + '</div>';
    }
}
//Store erase


//localStorage.setItem("lastname", "Smith");

// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
/*
//XMLhttpRequest this tool help us to conect to the url that host the information
var personalinfo = document.getElementById("info");
var btn = document.getElementById("console");
var tnt = document.getElementById("exam3");
btn.addEventListener("click", function()
{
// now that we have the data we use onload to specify what we do with the data
                     var ourRequest = new XMLHttpRequest();

    
//open can send data or receive data GET = to download POST to upload
ourRequest.open('GET', 'https://salty-tundra-18278.herokuapp.com/index.php/lookup/api')
ourRequest.onload = function(){
    // next would show all the data on the console 
    //console.log(ourRequest.responseText);
    // now I want the data on a variable to be more specific
    var ourData = JSON.parse(ourRequest.responseText);
    // the next example will show the first object information on the console log
    console.log(ourData[0]);
    // it will display{fname: "Guillermina", lname: "Wing"}
//fname: "Guillermina"
//lname: "Wing"

};
//now we send the request 
ourRequest.send();    
});
*/
/******************************
*Example 2
*******************************/
/*
var btn1 = document.getElementById("example2");
btn1.addEventListener("click", function()
{
// now that we have the data we use onload to specify what we do with the data
                     var ourRequest = new XMLHttpRequest();

    
//open can send data or receive data GET = to download POST to upload
ourRequest.open('GET', 'https://salty-tundra-18278.herokuapp.com/index.php/lookup/api')
ourRequest.onload = function(){
    // next would show all the data on the console 
    //console.log(ourRequest.responseText);
    // now I want the data on a variable to be more specific
    var ourData = JSON.parse(ourRequest.responseText);
    // the next example will show the first object information on the console log
    renderHTML(ourData);
    // it will display{fname: "Guillermina", lname: "Wing"}
//fname: "Guillermina"
//lname: "Wing"

};
//now we send the request 
ourRequest.send();    
});

function renderHTML(data){
    //this function will containg json data
    var htmlString ="" ;
    //for(i = 0; i < data.length; i++) 
      //  {
        //this will select the data and insert it on a p
            htmlString += "<p>" + "the id is " + data[0].id + " and the type is " + data[0].type + " and the level is " + data[0].level + " and the catwalk is " + data[0].catwalk + " and the number is " + data[0].number + ".</p>";
        //}
    //this function will add HTML to a div
    personalinfo.insertAdjacentHTML('beforeend', htmlString );
}
*/
/******************************
*Example 3
*******************************/
/*
var tnt3 = document.getElementById("example3");
tnt3.addEventListener("click", function()
{
// now that we have the data we use onload to specify what we do with the data
                     var ourRequest1 = new XMLHttpRequest();

    
//open can send data or receive data GET = to download POST to upload
ourRequest1.open('GET', 'https://salty-tundra-18278.herokuapp.com/index.php/lookup/api')
ourRequest1.onload = function (){
    // next would show all the data on the console 
    //console.log(ourRequest.responseText);
    // now I want the data on a variable to be more specific
    var ourData3 = JSON.parse(ourRequest1.responseText);
    // the next example will show the first object information on the console log
    renderHTML1(ourData3);
    // it will display{fname: "Guillermina", lname: "Wing"}
//fname: "Guillermina"
//lname: "Wing"

};
//now we send the request 
ourRequest1.send();    
});

function renderHTML1(data){
    //this function will containg json data
    var htmlString3 ="" ;
    for(i = 0; i < data.length; i++) 
        {
        //this will select the data and insert it on a p
            htmlString3 += "<p>" + "the id is " + data[i].id + " and the type is " + data[i].type + " and the level is " + data[i].level + " and the catwalk is " + data[i].catwalk + " and the number is " + data[i].number + ".</p>";
        }
    //this function will add HTML to a div
    tnt.insertAdjacentHTML('beforeend', htmlString3 );
}*/