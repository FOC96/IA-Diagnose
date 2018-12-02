$(document).on('click', '.symptomPill' , function(){
    $(this).toggleClass('selected');
    $(this).toggleClass('default');
});

$(document).on('click', '.cardSmall' , function(){
    $(this).toggleClass('cardExtended');
    $(this).toggleClass('cardSmall');
});

$(document).on('input', '.temp', function() {

    let tempH = $('#tempH');
    let tempL = $('#tempL');
    let currentVal = $(this).val();

    $('#tempNum').html( currentVal +"ºC");
    if (currentVal < 36) {
        $('#tempDesc').html("Temperatura baja");
        tempH.val(0);
        tempL.val(0.3);
    } else if (currentVal > 38) {
        $('#tempDesc').html("Temperatura alta");
        tempH.val(0.8);
        tempL.val(0);
    } else {
        $('#tempDesc').html("Temperatura normal");
        tempL.val(0);
        tempH.val(0);
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
                                                                        
$(document).on('click', '#btnCont.primaryBtn', function(){
    let countSympts = $('input:checked').length;
    countSympts < 15 && alert('Selecciona al menos 15 sintomas 😬');
    if (countSympts < 15) return;
    let arrayValuesSympts = [];
    $('input[type=checkbox]').each(function () {
        let sympt = $(this).get(0);
        let index = parseInt(sympt.dataset.idsymp);
        arrayValuesSympts[index] = sympt.value;
    });
    loadingDots('.primaryBtn', "Preparando Datos");
    diagnostic(arrayValuesSympts, function(data){
        //    ██████╗ ██╗ █████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗████████╗██╗ ██████╗███████╗    ██████╗  █████╗ ████████╗ █████╗ 
        //    ██╔══██╗██║██╔══██╗██╔════╝ ████╗  ██║██╔═══██╗██╔════╝╚══██╔══╝██║██╔════╝██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
        //    ██║  ██║██║███████║██║  ███╗██╔██╗ ██║██║   ██║███████╗   ██║   ██║██║     ███████╗    ██║  ██║███████║   ██║   ███████║
        //    ██║  ██║██║██╔══██║██║   ██║██║╚██╗██║██║   ██║╚════██║   ██║   ██║██║     ╚════██║    ██║  ██║██╔══██║   ██║   ██╔══██║
        //    ██████╔╝██║██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║   ██║   ██║╚██████╗███████║    ██████╔╝██║  ██║   ██║   ██║  ██║
        //    ╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝                                                                                                              
        console.table(data);
        setTimeout(() => {
            stopDots('.primaryBtn', "Listo");
        }, 4000);
    });
});

var dots;
function loadingDots(element, text){
    var dot = "";
    element = $(element);
    dots = window.setInterval(function(){
        if (dot.length > 3)
            dot = "";
        else
            dot += ".";
        element.empty().append(text+dot);
    }, 200);
}

function stopDots(element, text){ 
    $(element).empty().append(text);
    clearInterval(dots); 
}