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
for (let i = 9; i < 18; i++) {
    // create div for whole row with class of "row" (from stylesheet) and id pegged to index
    // could not find a JQuery equivalent for document.createElement -- add() didn't seem to do it
    var rowDiv = document.createElement("div");
    $(rowDiv).attr("class", "row");
    $(rowDiv).attr("id", i);
    // create divs to go inside row with Bootstrap and other classes
    // div for time display column at left
    var timeColumn = document.createElement("div");
    $(timeColumn).attr("class","col-sm-1 hour");
    // div for text input area for tasks
    var taskColumn = document.createElement("div");
    $(taskColumn).attr("class","col-sm-10");
    // add textarea element inside taskColumn
    var taskColTextarea = document.createElement("textarea");
    $(taskColTextarea).attr("class","form-control h-100");
    $(taskColTextarea).attr("id","textarea");
    $(taskColumn).append(taskColTextarea);
    // div for save button column at right
    var saveColumn = document.createElement("div");
    $(saveColumn).attr("class","col-sm-1");
    // add button inside saveColumn
    var saveBtn = document.createElement("button");
    $(saveBtn).attr("class","saveBtn h-100 w-100");
    $(saveBtn).attr("id","saveBtn");
    $(saveColumn).append(saveBtn);
    // stick Font Awesome save icon inside button
    var saveIcon = document.createElement("i");
    $(saveIcon).attr("class","far fa-save")
    $(saveBtn).append(saveIcon)
    // append row to container
    $(container).append(rowDiv);
    // append divs to row
    $(rowDiv).append(timeColumn);
    $(rowDiv).append(taskColumn);
    $(rowDiv).append(saveColumn);
}

// var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

// // loop through hours array to create object-literal container with time designation to left
// for (let index = 0; index < hours.length; index++) {
//     container.append(` 
//     <div class="row">
//             <div class="col-sm-1 hour">${hours[index]}</div>
//             <div class="col-sm-10"><textarea class="form-control h-100" id="textarea"></textarea></div>
//             <div class="col-sm-1"><button class="saveBtn h-100 w-100" id="saveBtn"><i class="far fa-save"></i></button></div>
//         </div> 
//     `);

    // OR
    // make a div with a class that concetenates row + [i]
    // then insert object literal with the three columns as notated above
// }

var militaryHours = ["9", 10, 11, 12, 13, 14, "15", "16", "17"];
var timeNow = moment();
// console.log(timeNow);
for (index = 0; index < militaryHours.length; index++) {
    if (timeNow > parseInt(militaryHours)) {
        $("textarea").addClass("past");
    }
    else if (timeNow === parseInt(militaryHours)) {
        $("textarea").addClass("present");
    }
    else {
        $("textarea").addClass("future");
    }
}

// get text from input in textarea
$(".container").on("click", "textarea", function () {
    console.log(this);
    var task = $(this)
        .text()
        .trim();
});

$(".container").on("blur", "textarea", function () {

});

$(".saveBtn").on("click", "button", function () {
    localStorage.setItem("#saveBtn", task);
    console.log(task);
})