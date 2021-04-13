$('#imgOnebtn').click(function(){
    $('#imgOne').slideToggle();
});


$('#btnTwo').click(function(){
    $('#flowerImgDay').fadeOut();
    //$('#flowerImgNight').fadeToggle(); 
});

$('#btnThree').click(function(){
    $('#flowerImgNight').fadeIn(); 
});

$('#textbtnId').keyup(function(){
    let name=$('#textbtnId').val();
    $('#textID').html(name); 
});