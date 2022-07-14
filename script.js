
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
        displayTime(secondsLeft, pomodoroTime);
        displayTime(secondsLeft, shortBreakTime);
        displayTime(secondsLeft, longBreakTime);

        if(secondsLeft<1) {
            clearInterval(timerinterval);

        }
},1000);

};
function displayTime(seconds,element){
    const  minute = Math.floor(seconds/60);
    const second = seconds % 60;
    

    element.innerText = minute + " : " + second;
    
}
const pomodoroTime = document.getElementById("pomodoroTime");
const shortBreakTime = document.getElementById("shortBreakTime");
const longBreakTime = document.getElementById("longBreakTime");

const pomodoroButton =document.getElementById("pomodoroButton");
const shortBreakButton =document.getElementById("shortBreakButton");
const longBreakButton =document.getElementById("longBreakButton");

pomodoroButton.addEventListener("click",function (){
    const pomodoroTotalTime =1500;
    timer(pomodoroTotalTime);
});

shortBreakButton.addEventListener("click",function (){
    const shortBreakTotalTime =300;
    timer(shortBreakTotalTime);
});

longBreakButton.addEventListener("click",function (){
    const longBreakTotalTime =900;
    timer(longBreakTotalTime);

});



// setInterval(function() {
//     console.log(new Date().toISOString());

// },1000);

