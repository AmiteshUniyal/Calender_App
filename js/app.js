const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

 const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"] ;
 const Months = ["/ Jan /", "/ Feb /", "/ Mar /", "/ Apr /", "/ May /", "/ Jun /", "/ Jul /", "/ Aug /", "/ Sep /", "/ Oct /", "/ Nov /", "/ Dec /"];
 const dates = ["", "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]

day.innerHTML = Days[today.getDay()];
date.innerHTML = dates[today.getDate()];
month.innerHTML = Months[today.getMonth()];
year.innerHTML = today.getFullYear(); 