const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');


const Birthday = "01 Jan 2022";

function countdown(){
    const BirthdayDate = new Date(Birthday);
    const currentDate = new Date();
    
    const totalSeconds = new Date(BirthdayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
        
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

//adds zero to seconds
function formatTime(time) {
    return time < 10? `0${time}` : time;
}
// initial call
countdown();
setInterval(countdown, 1000);
