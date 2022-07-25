function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var twelveMinutes = 60 * 12,
    display = document.querySelector('#time');
    startTimer(twelveMinutes, display);
  };



let results =document.getElementById("hscore")


let count = 0

function add1()
{
    count+=1
    results.textContent=count
    
    
}

function add2()
{
    count+=2
    
    results.textContent=count
}

function add3()
{
    count+=3

    results.textContent=count
}


let outcome= document.getElementById("Ascore")
let x=0

function add1A()
{
    x+=1
    outcome.textContent=x
    
    
}

function add2A()
{
    x+=2

    outcome.textContent=x
}

function add3A()
{
    x+=3
    outcome.textContent=x
}
