 
 function timer(){

 let date = new Date();

 let day = date.getDate();
 let month = date.getMonth()+1;
 let year = date.getFullYear();

 let houer = date.getHours();
 if(houer<10) houer = "0"+godzina
 let minet = date.getMinutes();
 if(minet<10) minet = "0"+minet
 let sec = date.getSeconds();
 if(sec<10) sec = "0"+sec

 document.getElementById("timer").innerHTML = day + "/" + month + "/" + year + "|" + houer+":"+minet+":"+sec;

 setTimeout("timer()", 1000);
}
timer();

