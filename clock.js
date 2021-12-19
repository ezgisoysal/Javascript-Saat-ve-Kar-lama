let fullName = prompt("Adiniz Nedir?")
document.getElementById("myName").innerHTML = fullName;


let showTime = function() {
  const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes()<10 ? "0"+new Date().getMinutes() : new Date().getMinutes();
  var seconds = new Date().getSeconds()<10 ? "0"+new Date().getSeconds() : new Date().getSeconds();
  var dayAndClock = hours+":"+minutes+":"+seconds+" "+days[new Date().getDay()];
  document.getElementById("myClock").innerHTML = dayAndClock;
}

setInterval(showTime, 1000);
