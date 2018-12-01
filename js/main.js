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
    location.assign('about_you.html')
});

$(document).on('click', '#aYouBtn' , function(){
  name = $("#userName").val();

  if (name == "") {
    alert('No nos has dicho tu nombre 🙄');
  } else {
    location.assign('elements.html');
    localStorage.setItem("name", name);
  }
});



$(document).on('click', '.helpBtn' , function(){
    $('.extra').load('popUp.html')
});

$(document).on('click', '.closeBtn' , function(){
    $('.blackBack').toggleClass('out');
    setTimeout(function() {
        $('.blackBack').remove();}, 1000);
});

$(document).on('click', 'label', function() {
    let cnt = $(this).parent().get(0);
    let classObj = $(this).hasClass("selected");
    cnt = $(cnt).parent().get(0);
    cnt = $(cnt).find(".count.pill").get(0);
    cntObj = $(cnt);
    cntVal = parseInt($(cnt).html());
    cntVal = (classObj) ? cntVal + 1 : cntVal - 1;
    cntObj.html(cntVal);
});
