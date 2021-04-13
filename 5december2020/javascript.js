//Events
/*
let myBtn = document.getElementById("myBtn");

function sayHello(){
    window.alert(Hellow);
}

function mouseEvent(){
    window.alert("MOuse Event");
}

//myBtn.addEventListener("click",sayHello;


myBtn.addEventListener("click",function(){
    alert("I am nothing");
});


let inputField= document.getElementById("somthing");
let out = document.getElementById("out");

inputField.addEventListener("keypress",function(e){
    out.innerText=e.target.value;
});



let buttons = document.getElementsByClassName("myBtn");
let doSomthing = (e)=>{

       if(e.target.style.backgroundColor==red){
           e.target.style.backgroundColor = "#e5e5e5";
       }
       else{
           e.target.style.backgroundColor = "red";
       }
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',doSomthing);

}


let myform = document.addEventListener("myform");
let inputField= document.getElementById("somthing");
let out = document.getElementById("out");

myform.addEventListener('submit',function (e){
    e.preventDefult();

    out.style.fontSize = inputField.Value + "px";
    console.log(out.style);
});
*/

let btn = document.getElementById("btn");
let menu = document.getElementById("menu");

let isHide = true;

btn.addEventListener("click",function(){
    if(isHide== true){
    menu.classList.remove("hide");
    menu.classList.add("show");
    isHide=false;
    }
    else{
        menu.classList.remove("show");
        menu.classList.add("hide");
        isHide=true;
    }
});
