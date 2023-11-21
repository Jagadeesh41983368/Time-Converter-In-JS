let messageEl = document.getElementById("message");
let timeBtnEl  = document.getElementById("timeBtn");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let resultEl = document.getElementById("result");
resultEl.style.display = "none";

timeBtnEl.onclick = function(){
    if (hoursEl.value === "" || minutesEl.value===""){
        messageEl.textContent = "Please enter a valid numbers";
        resultEl.style.display = "none";
    }
    else{
        hoursValue = parseInt(hoursEl.value)*60*60;
        minutesValue = parseInt(minutesEl.value)*60;
        resultEl.style.display = "block";
        messageEl.textContent = "";
        resultEl.textContent = hoursValue+minutesValue;

        

    }
   
    
}