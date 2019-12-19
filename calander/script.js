let monthNamesRy = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfTheWeekRy = ["S", "M", "T", "W", "T", "F", "S"]

let d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
let thisMonth = d.getMonth();
let today = d.getDate();
let daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");


for (let month = 0; month < 12; month++) {
    createCalendar(month);
}



function createCalendar(month) {
    let monthDiv = createMonthHeader(month);

    let firstDayOfTheMonth = getFirstDayOfTheMonth(year, month);
    let daysinmonth = daysInMonth(year, month)
    let counter = 0,
        order = 6;

    for (let i = 0; i < firstDayOfTheMonth + 7; i++) {
        order++;
        createDay(month, "&nbsp;", order, monthDiv);
    }
    for (let i = firstDayOfTheMonth; i < daysInMonth(year, month) + firstDayOfTheMonth; i++) {
        counter++;
        order++;
        createDay(month, counter, order, monthDiv);
    }

    for (let i = firstDayOfTheMonth + daysinmonth; i < 6 * 7; i++) {
        order++;
        createDay(month, "&nbsp;", order, monthDiv);
    }


}

function createDay(month, counter, order, monthDiv) {

    //if(order == 8){order = -1}
    let day = document.createElement("div");
    if (month == thisMonth && counter == today) {
        day.setAttribute("class", "to day");
    } else {
        day.setAttribute("class", "day");
    }
    day.setAttribute("style", "order:" + order);
    day.innerHTML = counter;
    monthDiv.appendChild(day);

}


function createMonthHeader(month) {
    let calendar = document.querySelector(".calendar");



    let monthDiv = document.createElement("div");
    monthDiv.setAttribute("class", "month");
    calendar.appendChild(monthDiv);

    let h4 = document.createElement("h4");
    h4.innerHTML = monthNamesRy[month];
    monthDiv.appendChild(h4);

    for (let i = 0; i < 7; i++) {
        //var order = (i == 0) ? order = 7 : order = i;
        let hday = document.createElement("div");
        hday.setAttribute("class", "day OfWeek");
        hday.setAttribute("style", "order:" + i);
        hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
        monthDiv.appendChild(hday);
    }


    return monthDiv;

    /*
    <div class="month">
    	
    <div class="monthHeader">
    <div class="day OfWeek">Sun</div>
    <div class="day OfWeek">Mon</div>
    <div class="day OfWeek">Tue</div>
    <div class="day OfWeek">Wed</div>
    <div class="day OfWeek">Thu</div>
    <div class="day OfWeek">Fri</div>
    <div class="day OfWeek">Sat</div>
    </div>
    		
    <div class="daysOfTheMonth">
    */
}


function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate(); //29/03/2016 (month + 1)
}

function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getNextMonth(month){
 if (month == 11) {
    let nextMonth = 0;
} else {
    let nextMonth = month+1;
}
return nextMonth;
}

function getMonthName(month) {
    return monthNamesRy[month];
}

function getDayName(day) {
    return daysOfTheWeekRy[day];
}

function getFirstDayOfTheMonth(y, m) {
    let firstDay = new Date(y, m, 1);
    return firstDay.getDay();
}

function getLastDayOfTheMonth(y, m) {
    let lastDay = new Date(y, m + 1, 0);
    return lastDay.getDay();
}


// the popp up

let calendar = document.querySelector(".calendar");
let cloneCont = document.querySelector(".cloneCont");
let requestId = false;
calendar.addEventListener("click", function (e) {
    if (this.querySelector(".cloneCont")) {
        this.removeChild(this.querySelector(".cloneCont"));
    } else if (e.target.parentNode.className == 'month') {

        var monthClone = e.target.parentNode.cloneNode(true);
        monthClone.className += " cloneMonth";
        var cloneCont = document.createElement("div");
        cloneCont.className += " cloneCont";
        cloneCont.appendChild(monthClone);
        this.appendChild(cloneCont);

    }
}, false);