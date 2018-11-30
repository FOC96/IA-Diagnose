$(document).on('click', '.symptomPill' , function(){
    $(this).toggleClass('selected');
    $(this).toggleClass('default');
});

$(document).on('click', '.cardSmall' , function(){
    $(this).toggleClass('cardExtended');
    $(this).toggleClass('cardSmall');
});

$(document).on('input', '.temp', function() {
    $('#tempNum').html( $(this).val() +"ºC");
    if ($(this).val() < 36) {
      $('#tempDesc').html("Temperatura baja");
    } else if ($(this).val() > 38) {
      $('#tempDesc').html("Temperatura alta");
    } else {
      $('#tempDesc').html("Temperatura normal");
    }
    $('#tempCount').html("1");
});

$(document).on('click', '#saveTemp' , function(){
    $("#tempCard").toggleClass('cardExtended')
    $("#tempCard").toggleClass('cardSmall')
});

$(document).on('click', '#saveHead' , function(){
    $("#headCard").toggleClass('cardExtended')
    $("#headCard").toggleClass('cardSmall')
});

$(document).on('click', '#saveNose' , function(){
    $("#noseCard").toggleClass('cardExtended')
    $("#noseCard").toggleClass('cardSmall')
});

$(document).on('click', '#saveGeneral' , function(){
    $("#generalCard").toggleClass('cardExtended')
    $("#generalCard").toggleClass('cardSmall')
});

$(document).on('click', '#startBtn' , function(){
    location.assign('data.html')
});

$(document).on('click', '.helpBtn' , function(){
    $('body').append('<div class="blackBack"></div>')
    $('.blackBack').append('<div class="popUp"></div>')
});
