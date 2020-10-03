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

// var hoursArray = [{"09": 1},{"10": 2},{"11": 3},{"12": 4},{"01": 5},{"02": 6},{"03": 7},{"04": 8},{"05": 9}];
var hoursArray = ["09","10","11","12","01","02","03","04","05"];




var currentHour = moment().format('hh');
currentDay.append('' + moment().format('dddd') + ' ' + moment().format('MM/DD/YYYY'));

colorCode();

console.log(currentHour);

function colorCode(){

    if(currentHour === hoursArray[0]){
        col1.css("background-color", "red"); 
    }
    if(currentHour === hoursArray[1]){
        console.log(currentHour);
        col2.css("background-color", "red");
    }
    if(currentHour === hoursArray[2]){
        col3.css("background-color", "red");
    }
    if(currentHour === hoursArray[3]){
        col4.css("background-color", "red");
    }
    if(currentHour === hoursArray[4]){
        col5.css("background-color", "red");
    }
    if(currentHour === hoursArray[5]){
        col6.css("background-color", "red");
    }
    if(currentHour === hoursArray[6]){
        col7.css("background-color", "red");
    }
    if(currentHour === hoursArray[7]){
        col8.css("background-color", "red");
    }
    if(currentHour === hoursArray[8]){
        col9.css("background-color", "red");
    }

    if(currentHour > hoursArray[0]){
        col1.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[1]){
        col2.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[2]){
        col3.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[3]){
        col4.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[4]){
        col5.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[5]){
        col6.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[6]){
        col7.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[7]){
        col8.css("background-color", "lightgrey");
    }
    if(currentHour > hoursArray[8]){
        col9.css("background-color", "lightgrey");
    }

    if(currentHour < hoursArray[0]){
        col1.css("background-color", "green");
    }
    if(currentHour < hoursArray[1]){
        col2.css("background-color", "green");
    }
    if(currentHour < hoursArray[2]){
        col3.css("background-color", "green");
    }
    if(currentHour < hoursArray[3]){
        col4.css("background-color", "green");
    }
    if(currentHour < hoursArray[4]){
        col5.css("background-color", "green");
    }
    if(currentHour < hoursArray[5]){
        col6.css("background-color", "green");
    }
    if(currentHour < hoursArray[6]){
        col7.css("background-color", "green");
    }
    if(currentHour < hoursArray[7]){
        col8.css("background-color", "green");
    }
    if(currentHour < hoursArray[8]){
        col9.css("background-color", "green");
    }

}

