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

/******************************
*Example 2
*******************************/
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

/******************************
*Example 3
*******************************/
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
}