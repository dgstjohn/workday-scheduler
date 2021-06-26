// display date in header
var currentDay = moment().format("dddd, MMMM D, YYYY");
console.log (currentDay);
var displayDay = $( "#currentDay" );
console.log(displayDay);
$(displayDay.text(currentDay));

// create rows from 9 am to 5 pm 
var container = $(".container");
var hours = ["9 am", "10 am", "11 am", "Noon", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var militaryHours = [9,10,11,12,13,14,15,16,17]
var militaryHours2 = [20,21,22,23,0,1,2,3,4]

for (let index = 0; index < militaryHours2.length; index++) {
    container.append(` 
    <div class="row">
            <div class="col-sm-1 hour">${hours[index]}</div>
            <div class="col-sm-9"><textarea class="form-control h-100" id="textarea"></textarea></div>
            <div class="col-sm-2"><button class="saveBtn h-100 w-100"><i class="far fa-save"></i></button></div>
        </div> 
    ` );
}

var timeNow = moment().format("H");
console.log(timeNow);
for (index = 0; index < militaryHours.length; index++) {
    if (timeNow < militaryHours)  {
        $( "textarea" ).addClass("past");
    }
    else if (timeNow === militaryHours  ) {
        $( "textarea" ).addClass("present");
    } 
    else {
        $( "textarea" ).addClass("future");
    }
}
// if (timeNow < )
