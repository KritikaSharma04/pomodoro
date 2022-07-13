
//develop tab functinality 
//1. select all tabs from the list 

const pomodoroTab=document.getElementById("pomodoro");
const shortBreakTab=document.getElementById("shortBreak");
const longBreakTab=document.getElementById("longBreak");

const pomodoroContent=document.getElementById("Pomodoro-content");
const shortBreakContent=document.getElementById("ShortBreak-content");
const longBreakContent=document.getElementById("LongBreak-content");


//2. add click event listener to each tab 
pomodoroTab.addEventListener("click",function() {
    pomodoroTab.classList.add("active");
    longBreakTab.classList.remove("active");
    shortBreakTab.classList.remove("active");

    pomodoroContent.classList.add("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.remove("active");
    
});


shortBreakTab.addEventListener("click",function() {
    pomodoroTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    shortBreakTab.classList.add("active");

    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.add("active");
    longBreakContent.classList.remove("active");    
});

longBreakTab.addEventListener("click",function() {
    pomodoroTab.classList.remove("active");
    longBreakTab.classList.add("active");
    shortBreakTab.classList.remove("active");

    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.add("active");
});

//3.remove all active tab class from the tab list 

//4. add active class to selected tab 

//5. remove all active class from tab content

//6. add active class to selected tab content

// timer to develop

function timer(seconds) {
    const now=Date.now();
    const then=now+(seconds*1000);

    const timerinterval=setInterval(function() {
        const secondsLeft = Math.round((then-Date.now())/1000);
        console.log(secondsLeft);

        if(secondsLeft<1) {
            clearInterval(timerinterval);

        }
},1000);

};
timer(5);

// setInterval(function() {
//     console.log(new Date().toISOString());

// },1000);

