$(document).on('click', '.symptomPill' , function(){
    $(this).toggleClass('selected');
    $(this).toggleClass('default');
});

$(document).on('click', '.cardSmall' , function(){
    $(this).toggleClass('cardExtended');
    $(this).toggleClass('cardSmall');
});
