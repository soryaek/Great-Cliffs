function currentTime() {

    var d = new Date();             //Get current date
    var hr = d.getHours();          //Get current hour
    var min = d.getMinutes();       //Get current minute
    var sec = d.getSeconds();       //Get current seconds
    var ampm;                       //Declare empty variable to store AM or PM

    var utchr = d.getUTCHours();    //Get current Greenwich Mean Time (GMT)
    var timeDiffer;                 //To store time difference between GMT hour and Local hour
    var adjTimeDiff;                //To store time difference converted to positive number
    var timeZone;                   //To store the 4 time zones (PT, MT, CT, ET)

    timeDiffer = hr - utchr;

    if (timeDiffer < 0) {
        adjTimeDiff = utchr - hr;   //Convert to positive number 
    }else{
        adjTimeDiff = timeDiffer; 
    }

    switch (adjTimeDiff){            //Convert to time zone
        case 5:
            timeZone = "ET";         
            break; 
        case 6:
            timeZone = "CT";
            break;
        case 7:
            timeZone = "MT"; 
            break; 
        case 8:
            timeZone = "PT"; 
            break; 
        default:
            timeZone = "";           //Different time zone from PT, MT, CT, ET 
    }

    //Add 0 to single digits for seconds
    if (sec < 10 ){
        sec = "0" + sec;
    }
    if (min < 10){
        min = "0" + min; 
    }

    //Determine AM or PM string
    if (hr == 12){
        ampm ="PM"; //Set to PM
    }else if (hr > 12){
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    }else{
        ampm = "AM";  
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;  

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;

        //Run time data function every 1 second
    setInterval(currentTime, 1000);  

}
//Initial run of time data function
currentTime(); 