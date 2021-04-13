/*
let div=$("#myDiv");
$('button').click(function(){
    div.prepend("<p>I am jquary</p>");
});


//append(),


let p=$("#myp");
$('button').click(function(){
    p.after("<p>I am jquary</p>");
});

let nameFild= $('#mane');
let addBtn= $('#addBtn');
let tbd= $('#tbd');

//addBtn.on('click'.function () {})

let name;
let elm;
let sl = 1;

addBtn.click(function(){
    name = nameFild.val()
    elm= "<tr>"+
    "<td>"+ ++sl +"</tb>"+
    "<td>"+name+"</td>"+
    "</tr>"+"</tr>"
    tbd.append(elm)
});
*/

$("button").click(function(){

    $("p").remove('.child');
});