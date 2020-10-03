// $(document).ready(function(){


// })

var currentDay = $("#currentDay");
var displayHours = $(".hours");

var row1 = $("#row1");
var row2 = $("#row2");
var row3 = $("#row3");
var row4 = $("#row4");
var row5 = $("#row5");
var row6 = $("#row6");
var row7 = $("#row7");
var row8 = $("#row8");
var row9 = $("#row9");

var col1 = $("#col1");
var col2 = $("#col2");
var col3 = $("#col3");
var col4 = $("#col4");
var col5 = $("#col5");
var col6 = $("#col6");
var col7 = $("#col7");
var col8 = $("#col8");
var col9 = $("#col9");

var currentHour = moment().format('hh');
currentDay.append('' + moment().format('dddd') + ' ' + moment().format('MM/DD/YYYY'));

colorCode();



function colorCode(){

    if(currentHour == "09"){
        col1.css("background-color", "red");
    }
    if(currentHour == "10"){
        col2.css("background-color", "red");
    }
    if(currentHour == "11"){
        col3.css("background-color", "red");
    }
    if(currentHour == "12"){
        col4.css("background-color", "red");
    }
    if(currentHour == "01"){
        col5.css("background-color", "red");
    }
    if(currentHour == "02"){
        col6.css("background-color", "red");
    }
    if(currentHour == "03"){
        col7.css("background-color", "red");
    }
    if(currentHour == "04"){
        col8.css("background-color", "red");
    }
    if(currentHour == "05"){
        col9.css("background-color", "red");
    }

    if(currentHour > "09"){
        col1.css("background-color", "lightgrey");
    }
    if(currentHour > "10"){
        col2.css("background-color", "lightgrey");
    }
    if(currentHour > "11"){
        col3.css("background-color", "lightgrey");
    }
    if(currentHour > "12"){
        col4.css("background-color", "lightgrey");
    }
    if(currentHour > "01"){
        col5.css("background-color", "lightgrey");
    }
    if(currentHour > "02"){
        col6.css("background-color", "lightgrey");
    }
    if(currentHour > "03"){
        col7.css("background-color", "lightgrey");
    }
    if(currentHour > "04"){
        col8.css("background-color", "lightgrey");
    }
    if(currentHour > "05"){
        col9.css("background-color", "lightgrey");
    }

    if(currentHour < "09"){
        col1.css("background-color", "green");
    }
    if(currentHour < "10"){
        col2.css("background-color", "green");
    }
    if(currentHour < "11"){
        col3.css("background-color", "green");
    }
    if(currentHour < "12"){
        col4.css("background-color", "green");
    }
    if(currentHour < "01"){
        col5.css("background-color", "green");
    }
    if(currentHour < "02"){
        col6.css("background-color", "green");
    }
    if(currentHour < "03"){
        col7.css("background-color", "green");
    }
    if(currentHour < "04"){
        col8.css("background-color", "green");
    }
    if(currentHour < "05"){
        col9.css("background-color", "green");
    }

}

