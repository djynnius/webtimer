var hours;
var minutes;
var seconds;
let threshold = 0.1;

let now = moment().unix();

let targetTime = 3600+3;
let thresholdTime = targetTime*threshold;

$("body").css({background: "blue"});

let displayClock = function(s, m, h){
    if(h == 0){
        $("#maintimer").css({fontSize: "20em"});
    } else {
        $("#maintimer").css({fontSize: "14em"});
    }
    
    
    $(".seconds").empty().text(numeral(s).format('00'));
    $(".minutes").empty().text(numeral(m).format('00'));
    if(h == 0){
        $(".hours").empty();
        $(".hours_min").empty();
    } else {
        $(".hours").empty().text(numeral(h).format('00'));
    }    
}

/*Create the clock function*/
let clock = setInterval(()=>{
    targetTime--; 

    if(targetTime > 0){

        if(targetTime <= thresholdTime){
            $("body").css({background: "red"});
        }
        seconds = targetTime%60;
        minutes = Math.floor(targetTime/60)%60;
        hours = Math.floor(targetTime/(60*60));

        displayClock(seconds, minutes, hours);
                 
    } else {
        targetTime = 0;
        
        seconds = 0;
        minutes = 0;
        hours = 0;

        displayClock(seconds, minutes, hours);
        /*Stop the clock from running infinitely if down to 0*/
        clearInterval(clock);
    }

    /*console.log(targetTime, seconds, minutes, hours);*/
}, 1000);


