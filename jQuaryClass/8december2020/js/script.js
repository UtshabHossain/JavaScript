$('#fedeOut').click(function(){
    $('#divOne').fadeOut('slow');
});

$('#fedeIn').click(function(){
    $('#divTwo').fadeIn('slow');
});

//--HW--
//fadeToggle();
//slideUp();
//slideDown();
//slideToggle();

$('#slideDownbtn').dblclick(function(){
    $('#SlideDownDiv').slideToggle();
});

//data get
$('#nameId').keyup(function(){
    let name= $('#nameId').val();
    $('#nameData').html(name);
});

//data set
