//this is for session time
let min=1;
let sec=0;

let count=1;
//this is for break time
let min2=5;
let sec2=0;

let session1=min;
let breakk1=sec;

let session2=min2;
let breakk2=sec2;

var startbutton=document.getElementById("start1");
var pause1=document.getElementById("pause1");
var resume1=document.getElementById("resume1");
pause1.style.display="none";
resume1.style.display="none";

var st20=document.getElementById("st20");
var bt5=document.getElementById("bt5");

var printpp=document.getElementById("heading1");
printpp.innerHTML=" 1 . 00";
printpp.style.color="#39C0ED";

var interval ;
var flag=1;
var binterval;

document.getElementById("beepAudio").src = "http://soundbible.com/grab.php?id=1252&type=mp3";

function start()
{ 

   if(flag!=2)
   {
     try2();
   }
   else if(flag==0)
   {
     try2();
   }
   else
   {
     min=1;
     sec=0;
     try2();
   }

  //try2();
}

function try2()
{
  document.getElementById("btn").disabled=true;
  document.getElementById("btn2").disabled=true;
  document.getElementById("btn3").disabled=true;
  document.getElementById("btn4").disabled=true;

   interval =setInterval(function()
  {  
    var el=document.getElementById("heading1");
    
    if(sec==0 && min==0)
    {
      document.getElementById("beepAudio").play();

      clearInterval(interval);
      el.innerHTML=" 00:00";
      document.getElementById("ss").innerHTML="Break";
      min=session1;
      sec=breakk1;

      breakf();
    }

    else if(sec==0)
    {
      min=min-1;
      sec=59;
      el.innerHTML=min + ":" +sec;
    }
    else if(sec>0)
    {
         
        sec=sec-1;
        el.innerHTML=min +":" +sec;
    }
   
  },1000
  )

  pause1.style.display="block";
  startbutton.style.display="none";   
}

function resume()
 {
   flag=0;
     start();
        resume1.style.display="none";

 }

function inc()
{
 min++;
 session1=min;
 st20.innerHTML =`${min} min`;
 printpp.innerHTML=`${min}:${sec}`;
}
function dec()
{
  if(min>0)
{  min--;
  session1=min;
  st20.innerHTML =`${min} min`;
  printpp.innerHTML=`${min}:${sec}`;
}
}
function inc2()
{
  min2++;
  session2=min2;
  bt5.innerHTML =`${min2} min`;
}
function dec2()
{
  if(min2>0)
  {
    min2--;
    session2=min2;
  bt5.innerHTML =`${min2} min`;
}
}

function restart()
{
   min=0;
   sec=0;
  flag=2;
  printpp.innerHTML=`${min}0:${sec}0`;
  pause1.style.display="none";
  resume1.style.display="none";
  startbutton.style.display="block";

  document.getElementById("btn").disabled=false;
  document.getElementById("btn2").disabled=false;
  document.getElementById("btn3").disabled=false;
  document.getElementById("btn4").disabled=false;

}

function breakf()
{
  document.getElementById("btn").disabled=true;
  document.getElementById("btn2").disabled=true;
  document.getElementById("btn3").disabled=true;
  document.getElementById("btn4").disabled=true;

  binterval =setInterval(function()
  {  
    var el2=document.getElementById("heading1");
    
    if(sec2==0 && min2==0)
    {
      document.getElementById("beepAudio").play();

      count++;
      clearInterval(binterval);
      el2.innerHTML=" 00:00";
      document.getElementById("ss").innerHTML=`session ${count}`;

      min2=session2;
      sec2=breakk2;
      try2();
    }

    else if(sec2==0)
    {
      min2=min2-1;
      sec2=59;
      el2.innerHTML=min2 + ":" +sec2;
    }
    else if(sec2>0)
    {
         
        sec2=sec2-1;
        el2.innerHTML=min2 +":" +sec2;
    }
   
  },1000
  )

  pause1.style.display="block";
  startbutton.style.display="none";   
}


function pause()
{
  clearInterval(interval);
  clearInterval(binterval);
  pause1.style.display="none";
  resume1.style.display="block";
}
