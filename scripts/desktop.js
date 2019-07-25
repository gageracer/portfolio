// Desktop Specific Variables

var menuText = [["Home","Ev"],
                ["About","Hakkımda"],
                ["Projects","Projeler"],
                ["Contact","İletişim"]];

var lang = ["EN","TR"];

var homeContentHeader = ["Welcome to my Portfolio.",

"Portföyüme Hoşgeldin."];

var homeContentList = [
    [
        "This is a test bench tab for my projects.",
        "Here is a todolist made with just javascript.",
        "You can check the actual portfolio using the right menu"],
    [
        "Şu anda bulunduğun tab benim test masam.",
        "Aşağıda Todo listesi uygulaması var ve sadece javascript ile hazırlandı.",
        "Portfoliyonun tamamını yandaki menü aracılığıyla inceleyebilirsin."]
];




// Functions for the Desktop

function anim(){
    let me = document.getElementById("home-animation");
    if(start == 25)
        down = false;
    else if( start == 0)
        down = true;

    console.log(Number(me.style.top +":"+ down));
    if(down)
        {
            start++;
            me.style.top = start + "px";
        }
        
    else{
            start--;
            me.style.top = start + "px";
    }
        
}


let start = 0;
let down = true;

function today(){
    let me = document.getElementById("datee");
    var today = new Date().getHours() + ":" + new Date().getMinutes()+
    ":"+ new Date().getSeconds();
    me.innerText ="Time is: " + today;
}

function countDownTimer(){
    let me = document.getElementById("date-counter");
    var f1 = new Date("July 30, 2019 12:00:00").getTime();
    f2 = new Date().getTime();
    var distance = f1-f2;
    if( distance > 0){
    // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        me.innerText = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }
    else
        me.innerText = "Time is done!";
}
window.setInterval(countDownTimer,100);
window.setInterval(today,100);


function sinanim(){
    let me = document.getElementById("home-animation");
    s = Math.sin(start);
    me.style.top = (200*s) + "px";
    // me.style.left = (10*start) + "px";
    start+= 0.15;
}
// window.setInterval(sinanim,30);