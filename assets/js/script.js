// display date in header
// variable to grab Moment "right now" value, reduced to day + date format
var currentDay = moment().format("dddd, MMMM D, YYYY");
// variable to select #currentDay id in header
var displayDay = $("#currentDay");
// JQuery text method to display date
$(displayDay.text(currentDay));

// set variable for container to add dynamically created rows
var container = $(".container");

// for loop to create dynamic rows 
// index starts at 9 to match row id to time 
for (i = 9; i < 18; i++) {
    // create div for whole row with class of "row" (from stylesheet) and id pegged to index
    // could not find a JQuery equivalent for document.createElement -- add() didn't seem to do it
    var rowDiv = document.createElement("div");
    $(rowDiv).attr("class", "row");
    $(rowDiv).attr("id", i);

    // create divs to go inside row with Bootstrap and other classes
    // div for time display column at left
    var timeColumn = document.createElement("div");
    $(timeColumn).attr("class", "col-sm-1 hour");

    // div for text input area for tasks
    var taskColumn = document.createElement("div");
    $(taskColumn).attr("class", "col-sm-10");

    // add textarea element inside taskColumn
    var taskColTextarea = document.createElement("textarea");
    $(taskColTextarea).attr("class", "form-control h-100");
    $(taskColTextarea).attr("id", "textarea");
    $(taskColumn).append(taskColTextarea);

    // div for save button column at right
    var saveColumn = document.createElement("div");
    $(saveColumn).attr("class", "col-sm-1");

    // add button inside saveColumn
    var saveBtn = document.createElement("button");
    $(saveBtn).attr("class", "saveBtn h-100 w-100");
    $(saveBtn).attr("id", "saveBtn");
    $(saveColumn).append(saveBtn);

    // stick Font Awesome save icon inside button
    var saveIcon = document.createElement("i");
    $(saveIcon).attr("class", "far fa-save")
    $(saveBtn).append(saveIcon)

    // append row to container
    $(container).append(rowDiv);

    // append divs to row
    $(rowDiv).append(timeColumn);
    $(rowDiv).append(taskColumn);
    $(rowDiv).append(saveColumn);

    // variable to set text for time display
    if (i < 13) {
        var timeDisplay = i + " am";
    }
    // subtract 12 from the index to display pm time correctly
    else {
        var timeDisplay = (i - 12) + " pm";
    }
    // JQuery text method to display time
    $(timeColumn).text(timeDisplay);
}

// do for loop to check the rows and assign a color class
// once again, index is 9 to 18
for (i = 9; i < 18; i++) {
    // set variable to get Moment time for color assignment to task row
    // using Moment hour method from https://momentjs.com/docs/#/get-set/hour/
    var currentTime = moment().hour();
    // console.log(currentTime);

    // grab the row id number into a variable
    var rowId = document.getElementById(i);
    // console.log(rowId.id);

    // compare the row id number with the current time and set the corresponding color (defined in stylesheet)
    // take out classes that have become incorrect (if they're there)
    // fixed 'lack of .id' bug
    if (rowId.id < currentTime) {
        $(taskColumn).addClass("past");
        $(taskColumn).removeClass("present");
        $(taskColumn).removeClass("future");
    }
    else if (rowId.id === currentTime) {
        $(taskColumn).addClass("present");
        $(taskColumn).removeClass("past");
        $(taskColumn).removeClass("future");
    }
    else {
        $(taskColumn).addClass("future");
        $(taskColumn).removeClass("past");
        $(taskColumn).removeClass("present");
    }
}

// // first, get any values in localStorage or set variable to empty array
// // (example from localStorage class activity)
//     var list = JSON.parse(localStorage.getItem('XXXXX')) || [];

// // get text from input in textarea
// $("#row").on("blur", "textarea", function (event) {
//     event.preventDefault
//     console.log(this);
//     var task = $(this)
//         .val()
//         .trim();
// });

// // $(".container").on("blur", "textarea", function () {
// //     var taskCapture= $(this)
// //     .val();
// // });

// $(".saveBtn").on("click", "button", function () {
//     localStorage.setItem("#row.id", taskCapture);
//     console.log(taskCapture);
// })