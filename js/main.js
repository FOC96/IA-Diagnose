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

$(document).on('click', '.diseaseWrapper' , function(){
    $(this).toggleClass('default');
    $(this).toggleClass('selected');
});


$(document).on('click', '.helpBtn' , function(){
    $('.extra').load('popUp.html')
});

$(document).on('click', '.closeBtn' , function(){
    $('.blackBack').toggleClass('out');
    $('.popUp').toggleClass('popUpOut');
    setTimeout(function() {
        $('.blackBack').remove();}, 1000);
});

$(document).on('click', '#saveSymp' , function(){
    $('.blackBack').toggleClass('out');
    $('.popLevel').toggleClass('popLevelOut');
    setTimeout(function() {
        $('.blackBack').remove();}, 1000);
});

$(document).on('click', 'label', function() {

    let objet = this;
    let idInputSymp = $(this).attr('for');
    let cnt = $(this).parent().get(0);
    let classObj = $(this).hasClass("selected");
    //PAIN LEVEL
    if (classObj){
        $('.extra').load('level.html', function(){
            $('#sympSubTitle').empty().append(`¿Qué tanta molestia te da ${objet.textContent} ?`);
            $('.painLevel').data('sympIdLevel', idInputSymp);
            $(`#${idInputSymp}`).val(0.1)
        });
    }
    cnt = $(cnt).parent().get(0);
    cnt = $(cnt).find(".count.pill").get(0);
    cntObj = $(cnt);
    cntVal = parseInt($(cnt).html());
    cntVal = (classObj) ? cntVal + 1 : cntVal - 1;
    !classObj && $(`#${idInputSymp}`).val(0);
    cntObj.html(cntVal);
});

$(document).on('input', '.painLevel', function() {

    // data-sympIdLevel
    let idInputSymp = $(this).data('sympIdLevel');
    $(`#${idInputSymp}`).val($(this).val());

    $('#pain').html( $(this).val());
    if ($(this).val() < 0.3) {
      $('#painDesc').html("Algo de molestia");
    } else if ($(this).val() > 0.8) {
      $('#painDesc').html("Dolor extremo");
    } else {
      $('#painDesc').html("Mucha molestia");
    }
});

$(document).on('click', '.primaryBtn', function(){
    $('input:checked').each(function () {
        console.log($(this).get(0));
    });
});
