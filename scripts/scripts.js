







// JSON STUFF

// var arr = {education: "ieu",work_experience: "Vinple",language_skill : "English,Pre-advanced",computer_skill:"GNU/Linux"};
// var jobj = JSON.stringify(arr);
// var test2 = "MY name is ...";
// jobj2 = JSON.stringify(test2);
// console.log(jobj2);
// console.log(test2);
// localStorage.setItem("file",jobj);
// localStorage.setItem("name",test2);

function changeLang(){
    let obj = document.getElementsByClassName("menu");
    let but = document.getElementById("lang");
    let abo = document.getElementById("about-text");
    let port = document.getElementById("home-content-header");
    let homeLi = document.getElementById("home-content-list");

    console.log(obj);
    console.log(homeLi);

    let j = 0;
    
    for(let i = 1; obj[0].childNodes.length > i; i+=2){
        if(obj[0].childNodes[1].childNodes[i].childNodes[3].innerText == menuText[j][0]){
            obj[0].childNodes[1].childNodes[i].childNodes[3].innerText = menuText[j][1];
        }
        else{
            obj[0].childNodes[1].childNodes[i].childNodes[3].innerText = menuText[j][0];
        }
        j++;
    }

    if(but.innerText == lang[1]){
        but.innerText = lang[0];
        if(abo != undefined)
            abo.innerText = aboutText[1];
        if(port != undefined)
            port.innerText = homeContentHeader[1];
        for( let i = 0; homeContentList[0].length > i ; i++)
        {   
            homeLi.childNodes[i+1].innerText = homeContentList[1][i];

        }
    }else{
        but.innerText = lang[1];
        if(abo != undefined)
            abo.innerText = aboutText[0];
        if(port != undefined)
            port.innerText = homeContentHeader[0];
        for( let i = 0; homeContentList[0].length > i ; i++)
        {
            homeLi.childNodes[i+1].innerText = homeContentList[0][i];
        }
    }
    // if(obj.style.color == "purple"){
    //     obj.style.color = "magenta";
    //     obj.innerHTML = "This is magenta now!";
    // }
}






// Function 3
// AutoFilled  and Generated Groups

window.onload = function generateSite(){

    let obj = document.getElementsByClassName("menu");
    let but = document.getElementById("lang");
    let abo = document.getElementById("about-text");
    let port = document.getElementById("home-content-header");
    let homeLi = document.getElementById("home-content-list");
    let todo = getToDo("todo");

    if(port != undefined)
        port.innerText = homeContentHeader[0];
    but.innerText = lang[1];
    if(abo != undefined)
        abo.innerText = aboutText[0];

    if(todo.length > 0) {
        for( let i = 0; todo.length > i ; i++)
        {
            var you = document.createElement("li");
            you.className = "todoli";
            you.innerHTML = todo[i] + '<button class="remove-button" id="td' + i + '" onclick="remove(this.id)">X</button>';
            document.getElementById("todo-list").appendChild(you);
        }
    }
    let j = 0;
    for(let i = 1; obj[0].childNodes[1].childNodes.length > i; i+=2){
        obj[0].childNodes[1].childNodes[i].childNodes[3].innerText = menuText[j][0];
        j++;
    }
    
    for( let i = 0; homeContentList[0].length > i ; i++)
    {
        var para = document.createElement("li");
        para.innerText = homeContentList[0][i];
        homeLi.appendChild(para);
    }
    // document.getElementById("test").innerHTML = jobj;
    // var str = "javascript";
    // for( let i=0; str.length>i;i++){
    //     console.log(str.charAt(i)+"\n");
    // }
}


// Animation Clicking functions

// Second Page stuff

var aboutText = ["Highly adaptable with programming languages and their concepts, operating systems and platforms. A hard worker and collaborative individual with great people skills. Seeking a new position as a full stack developer with a company in the software industry.",

"Programlama dilleri ve kavramları, işletim sistemleri ve platformlarıyla uyum sağlaması çok yüksek. Çok iyi insan becerisine sahip çalışkan ve işbirlikçi birey.Yazılım endüstrisindeki bir şirketle full-stack geliştirici olarak yeni bir pozisyon arıyor."];

var skills_head = ["Skills","Yetenekler"];
var skills = [ ["Operating Systems: ","GNU/Linux, Microsoft Windows,MacOS"],
["Programming Languages: ","Golang,Java,C,C++,C#,Python,Lua,Javascript"],
["Version Control: ","Git"],
["Tools: ","Unity 3D,Visual Studio,GitHub,Blender,Android Studio,Atom,Entrerprise Architecture(Advanced),Visual Studio Code"]
];

var exp_head = ["Experience","Tecrübelerim"];
var exp = [
    ["Vinple, Vancouver - Full Stack Developer \nMarch 2019 - Present",
"Worked on Golang for the back-end side for the web sockets",
"Worked on React libraries such as ReactXP, React Native Web for cross-platform app distribution",
"Worked on React for the web app",
"Working as an Android developer for the native mobile app using Kotlin"]
];

function secondPage(){

    document.getElementById("second").style.display = "flex";
    let me = document.getElementById("home-content-pic");
    me.style.animationPlayState = "running";
    // document.getElementById("about-text").style.opacity = 1;
    document.getElementById("second").onmouseenter = null;
    document.getElementById("second-menu").onclick = null;
    
    // Skills
    me = document.getElementById("skills");
    me.className = "second second-inner second-head";
    me.innerText = skills_head[0];
    var you = document.createElement("ul");
    me.appendChild(you);

    for(let i =0; i<skills.length; i++){
        me = document.createElement("li");
        me.className = "second second-inner";
        me.innerHTML = '<dt>' + skills[i][0] + '</dt><dd>'+ skills[i][1] + '</dd>';
        you.appendChild(me);
    }

    // Experience
    me = document.getElementById("exp");
    me.className = "second second-inner second-head";
    me.innerText = exp_head[0];
    var you = document.createElement("ul");
    me.appendChild(you);
    for(let i = 0; i < exp[0].length; i++){
        if(i == 0){
            me = document.createElement("li");
            me.className = "second second-inner";
            me.innerText = exp[0][i];
            you.appendChild(me);
            me = document.createElement("ul");
            you.appendChild(me);
        }
        me.className = "second second-inner";
        me.innerHTML += '<li>' + exp[0][i] + '</li>';
    }



}

//Third Page Stuff
function thirdPage(){
    secondPage();
    document.getElementById("third").style.display = "flex";
}

function pickpic(imgs){
        var expandImg = document.getElementById("project-img");
        var imgText = document.getElementById("project-text");
    if(imgs.id == "vidpic"){
        document.getElementById("project-video").style.display = "block";
        expandImg.src = "";
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "flex";
    }
    else{
        document.getElementById("project-video").style.display = "none";
        expandImg.src = imgs.src;
        imgText.innerHTML = '<a href="https://gageracer.github.io/QFM/" target="_blank">'+ imgs.alt + '</a>';
        expandImg.parentElement.style.display = "flex";
    }
}




// Fourth Page Stuff

var contactText = ["Email: canaygin56@gmail.com","Mobile: (236) 777-34-91"]

function fourthPage(){
    secondPage();
    thirdPage();
    document.getElementById("fourth").style.display = "flex";
    //Email
    let me = document.getElementById("email");
    me.innerText = contactText[0];

    //Mobile
    me = document.getElementById("phone");
    me.innerText = contactText[1];


}


//COOKIE CHECKER
function cook(){
    if(navigator.cookieEnabled){
        console.log("Cookie is enabled");
    }
}
cook();

function inp(){
    console.log("copied: " + document.getElementById("first-in").value);
    document.getElementById("first-name").innerText = document.getElementById("first-in").value;
}





