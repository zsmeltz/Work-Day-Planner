
 
//ColumnsEl
var col1 = $("#col1");
var col2 = $("#col2");
var col3 = $("#col3");
var col4 = $("#col4");
var col5 = $("#col5");
var col6 = $("#col6");
var col7 = $("#col7");
var col8 = $("#col8");
var col9 = $("#col9");

//textEl
var text1 = $("#text1");
var text2 = $("#text2");
var text3 = $("#text3");
var text4 = $("#text4");
var text5 = $("#text5");
var text6 = $("#text6");
var text7 = $("#text7");
var text8 = $("#text8");
var text9 = $("#text9");

//buttonsEl
var button1 = $("#btn1");
var button2 = $("#btn2");  
var button3 = $("#btn3");
var button4 = $("#btn4");
var button5 = $("#btn5");
var button6 = $("#btn6");
var button7 = $("#btn7");
var button8 = $("#btn8");
var button9 = $("#btn9");


//Array of hours and their values to compare time in Moment.js:
var hoursArray = [{hour:"09", value:1},{hour:"10", value:2},{hour:"11",value:3},{hour:"12", value:4},{hour:"01", value:5},{hour:"02", value:6},{hour:"03", value:7},{hour:"04", value:8},{hour:"05", value:9}];

//currentHour changes the time layout to just the hour of the day. 
var currentHour = moment().format('hh');

//currentDay supplies the page with the current date like: Sunday 10/04/2020. This is to be displayed right below the paragraph explaining what the page is. 
currentDay.append('' + moment().format('dddd') + ' ' + moment().format('MM/DD/YYYY'));

//call the colorCode function.
colorCode();

//This function turns the currentHour variable into something numeric so it can compare it to the hoursArray.
//Also, getHourValue() gets the coordinating key of each hour row and displays them upon a refresh of the page. 
function getHourValue(hr) {
    for(let i=0; i < hoursArray.length; i++) {
        if(hr === hoursArray[i].hour) {
            return hoursArray[i].value
        }
        text1.val(localStorage.getItem("09"));
        text2.val(localStorage.getItem("10"));
        text3.val(localStorage.getItem("11"));
        text4.val(localStorage.getItem("12"));
        text5.val(localStorage.getItem("01"));
        text6.val(localStorage.getItem("02"));
        text7.val(localStorage.getItem("03"));
        text8.val(localStorage.getItem("04"));
        text9.val(localStorage.getItem("05"));
    }
}

console.log(currentHour);

//Checks if any specific time row is past, current, or future and gives them their color code:
function colorCode(){
     var val = getHourValue(currentHour);
    
    if(val === getHourValue("09")){
        col1.css("background-color", "#ff6961");
        text1.text("Current Hour!");
    }
    if(val === getHourValue("10")){
        console.log(val);
        col2.css("background-color", "#ff6961");
        text2.text("Current Hour!");
    }
    if(val === getHourValue("11")){
        col3.css("background-color", "#ff6961");
        text3.text("Current Hour!");
    }
    if(val === getHourValue("12")){
        col4.css("background-color", "#ff6961");
       
        text4.text("Current Hour!");
    }
    if(val === getHourValue("01")){
        col5.css("background-color", "#ff6961");
        text5.text("Current Hour!");
    }
    if(val === getHourValue("02")){
        col6.css("background-color", "#ff6961");
        text6.text("Current Hour!");
    }
    if(val === getHourValue("03")){
        col7.css("background-color", "#ff6961");
        text7.text("Current Hour!");
    }
    if(val === getHourValue("04")){
        col8.css("background-color", "#ff6961");
        text8.text("Current Hour!");
    }
    if(val === getHourValue("05")){
        col9.css("background-color", "#ff6961");
        text9.text("Current Hour!");
    }

    if(val > getHourValue("09")){
        col1.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("10")){
        col2.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("11")){
        col3.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("12")){
        col4.css("background-color", "#d3d3d3");
       
    }
    if(val > getHourValue("01")){
        col5.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("02")){
        col6.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("03")){
        col7.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("04")){
        col8.css("background-color", "#d3d3d3");
    }
    if(val > getHourValue("05")){
        col9.css("background-color", "#d3d3d3");
    }

    if(val < getHourValue("09")){
        col1.css("background-color", "#77dd77");
       
    }
    if(val < getHourValue("10")){
        col2.css("background-color", "#77dd77");
    }
    if(val < getHourValue("11")){
        col3.css("background-color", "#77dd77");
    }
    if(val < getHourValue("12")){
        col4.css("background-color", "#77dd77");
       
    }
    if(val < getHourValue("01")){
        col5.css("background-color", "#77dd77");
    }
    if(val < getHourValue("02")){
        col6.css("background-color", "#77dd77");
    }
    if(val < getHourValue("03")){
        col7.css("background-color", "#77dd77");
    }
    if(val < getHourValue("04")){
        col8.css("background-color", "#77dd77");
    }
    if(val < getHourValue("05")){
        col9.css("background-color", "#77dd77");
    }

}

//each of the click events below happen when you click the save button on each row of work time. When you click it, it saves the content inside the textarea of each row to LocalStorage, then changes the text of each button to say 'saved'.
button1.mousedown(function(){
    localStorage.setItem("09", text1.val());
    button1.text("saved");
});

button2.click(function(){
    localStorage.setItem("10", text2.val());
    button2.text("saved");
});
button3.click(function(){
    localStorage.setItem("11", text3.val());
    button3.text("saved");
});
button4.click(function(){
    localStorage.setItem("12", text4.val());
    button4.text("saved");
});
button5.click(function(){
    localStorage.setItem("01", text5.val());
    button5.text("saved");
});
button6.click(function(){
    localStorage.setItem("02", text6.val());
    button6.text("saved");
});
button7.click(function(){
    localStorage.setItem("03", text7.val());
    button7.text("saved");
});
button8.click(function(){
    localStorage.setItem("04", text8.val());
    button8.text("saved");
});
button9.click(function(){
    localStorage.setItem("05", text9.val());
    button9.text("saved");
});