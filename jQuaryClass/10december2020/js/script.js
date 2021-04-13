let div =$('#content');
let children=(div.children());
let index=0;
let red,green,blue;

$('#btn').click(function(){
        red= parseInt (Math.random()*255);
        green= parseInt (Math.random()*255);
        blue= parseInt (Math.random()*255);
    children[index].style.color = "rgb("+red+","+green+","+blue+")";
    index++;

    if(index == children.length){
        $("#btn").hide();
    }

});

console.log(children());
