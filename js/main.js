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
});
