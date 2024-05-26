document.addEventListener("DOMContentLoaded",()=>{let timer=[];let initialValue=[];let showed=false;const timeUnits=["week","day","hour","minute","second"];Array.prototype.slice.call(document.getElementsByClassName("ub-countdown")).forEach((instance,i)=>{timer[i]=setInterval(function(){let endDate=instance.getAttribute("data-enddate");let dailyReset=instance.getAttribute("data-dailyreset");let endDateObj=new Date(endDate*1000);var now_utc=Date.UTC(endDateObj.getFullYear(),endDateObj.getMonth(),endDateObj.getDate(),endDateObj.getHours(),endDateObj.getMinutes(),endDateObj.getSeconds());let endDateUTC=new Date(now_utc);let timeLeft=(endDateUTC.getTime()/1000)-
Math.floor(Date.now()/1000);if(dailyReset=='1'||timeLeft<0){var d=new Date();d.setHours(24,0,0,0);timeLeft=(d/1000)-
Math.floor(Date.now()/1000);let parent=instance.closest('div:not(.ub-countdown)');let defaultChild=parent.querySelector('.timer-text');if(defaultChild){defaultChild.style.display="none";}
let extendedElement=parent.querySelector('.extended-timer-text');if(extendedElement){extendedElement.style.display="block";}}
if(dailyReset==='1'){instance.classList.add('is_hh-mm-ss');instance.classList.remove('is_dd-hh-mm-ss');}else{instance.classList.remove('is_hh-mm-ss');instance.classList.add('is_dd-hh-mm-ss');}
const largestUnit=instance.getAttribute("data-largestunit")??'day';const smallestUnit=instance.getAttribute("data-smallestunit")??'second';let seconds=timeLeft%60;let minutes=((timeLeft-seconds)%3600)/60;let hours=(timeLeft-minutes*60-seconds)/3600;if(timeUnits.indexOf(largestUnit)<2){hours%=24;}
let days=(timeLeft-hours*3600-minutes*60-seconds)/86400;if(largestUnit==="week"){days%=7;}
let weeks=(timeLeft-days*86400-hours*3600-minutes*60-seconds)/604800;let animationDirection="decrease";const generateValue=(arr)=>arr.reduce((sum,currDigit,j)=>sum+10**(arr.length-j-1)*currDigit,0);if(!initialValue[i]){initialValue[i]=Array.prototype.slice.call(instance.querySelectorAll(".ub-countdown-odometer")).map((unit)=>Array.prototype.slice.call(unit.children).map((c)=>parseInt(c.innerHTML)));const conversionFactor=[7,24,60,60,1];const amounts=Array(timeUnits.indexOf(largestUnit)).fill(0).concat(initialValue[i].map((arr)=>generateValue(arr)),Array(4-timeUnits.indexOf(smallestUnit)).fill(0));if(timeLeft>amounts.reduce((total,current,j)=>total+
current*conversionFactor.slice(j,4).reduce((curFactor,current)=>curFactor*current,1),0)){animationDirection="increase";}}
if(timeLeft>=0){if(weeks<10){weeks="0"+weeks;}
if(days<10){days="0"+days;}
if(hours<10){hours="0"+hours;}
if(minutes<10){minutes="0"+minutes;}
if(seconds<10){seconds="0"+seconds;}
if(instance.querySelector(".ub_countdown_week"))
instance.querySelector(".ub_countdown_week").innerHTML=weeks;if(instance.querySelector(".ub_countdown_day"))
instance.querySelector(".ub_countdown_day").innerHTML=days;if(instance.querySelector(".ub_countdown_hour"))
instance.querySelector(".ub_countdown_hour").innerHTML=hours;if(instance.querySelector(".ub_countdown_minute"))
instance.querySelector(".ub_countdown_minute").innerHTML=minutes;if(instance.querySelector(".ub_countdown_second"))
instance.querySelector(".ub_countdown_second").innerHTML=seconds;if(instance.querySelector(".ub_countdown_circular_container")){if(instance.querySelector(".ub_countdown_circle_week")){instance.querySelector(".ub_countdown_circle_week .ub_countdown_circle_path").style.strokeDasharray=`${
(weeks*219.911)/52
}px, 219.911px`;instance.querySelector(".ub_countdown_circle_week .ub_countdown_circle_trail").style.strokeLinecap=weeks>0?"round":"butt";}
if(instance.querySelector(".ub_countdown_circle_day")){instance.querySelector(".ub_countdown_circle_day .ub_countdown_circle_path").style.strokeDasharray=`${
(days*219.911)/7
}px, 219.911px`;instance.querySelector(".ub_countdown_circle_day .ub_countdown_circle_trail").style.strokeLinecap=days>0?"round":"butt";}
if(instance.querySelector(".ub_countdown_circle_hour")){instance.querySelector(".ub_countdown_circle_hour .ub_countdown_circle_path").style.strokeDasharray=`${
(hours*219.911)/24
}px, 219.911px`;instance.querySelector(".ub_countdown_circle_hour .ub_countdown_circle_trail").style.strokeLinecap=hours>0?"round":"butt";}
if(instance.querySelector(".ub_countdown_circle_minute")){instance.querySelector(".ub_countdown_circle_minute .ub_countdown_circle_path").style.strokeDasharray=`${
(minutes*219.911)/60
}px, 219.911px`;instance.querySelector(".ub_countdown_circle_minute .ub_countdown_circle_trail").style.strokeLinecap=minutes>0?"round":"butt";}
if(instance.querySelector(".ub_countdown_circle_second")){instance.querySelector(".ub_countdown_circle_second .ub_countdown_circle_path").style.strokeDasharray=`${
(seconds*219.911)/60
}px, 219.911px`;instance.querySelector(".ub_countdown_circle_second .ub_countdown_circle_trail").style.strokeLinecap=seconds>0?"round":"butt";}}}else{clearInterval(timer[i]);instance.innerHTML=instance.getAttribute("data-expirymessage");}
if(!showed){instance.classList.remove("d-none");}},1000);});});