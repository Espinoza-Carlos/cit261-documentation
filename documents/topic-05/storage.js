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
