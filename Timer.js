let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

/*function alert1(){
  alert("Time up");
}*/


let countDown = () => {
    let futureDate = new Date(document.getElementById("myTime").value);
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60)%24;
    let min = Math.floor(myDate/1000/60)%60;
    let sec = Math.floor(myDate/1000)%60;
    
    if(myDate>0)
    {
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
  
    }
    else{
      var audio = new Audio('/mixkit-morning-clock-alarm-1003.wav');
      audio.play();

      alert("Your Time is Over");
    }
}

  
/*else{
  document.getElementById("display").innerHTML = " ";
  document.getElementById("message").innerHTML = "Countdown Not Started";
}*/
function getInputValue(){

  countDown()
  setInterval(countDown,1000);

}