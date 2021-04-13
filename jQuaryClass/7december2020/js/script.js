/*
//let testHead=document.getElementById('headone');

let testHead=document.querySelector('#headone');
console.log(headone.innerHTML);


// $ is a sign to define/access jquary
//selector --> to find HTML element (id,class,tag)
//acton --> 

$(selector).action();
*/

//let headone= $('#headone').html();
//console.log(headone);

//$('#headTwo').hide();
//$('#headThree').show();


$('#hidebtnOne').click(function(){
    $('#headone').hide();
});




$('#showTwoBtn').click(function(){
    $('#headTwo').show();
});

$('#toggleBtn').click(function(){
    $('#headThree').toggle();
    $('#headone').toggle();
});