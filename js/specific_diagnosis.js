$(document).ready(function() {
  $(window).on('load', function() {
    var result = JSON.parse(localStorage.getItem('result'));
    var selected = JSON.parse(localStorage.getItem('selected'));
    var diseases = [];
    var card = '';
    var total = 0;

    diseases = result.filter(function(disease, index) {
      for (var i = 0; i < selected.length; i++) {
        if (disease.id === selected[i]) {
          total += disease.total;
          return true;
        }
      }
    });

    diseases.forEach(function(disease) {
      var probability = Math.round((disease.total * 100) / total);
      var rec = '';

      enfermedades[disease.id].rec.filter(function(recommendation) {
        rec += `- ${recommendation} <br/>`;
      });

      card += `<div class="diagnosis">
                  <div class="header">
                    <div class="left">
                      <h2>${enfermedades[disease.id].name}</h2>
                      <p>${probability}% de probabilidad</p>
                    </div>
                    <div class="right"><button type="button" class="helpBtnHeader"></button></div>
                  </div>
                  <h3>¿Qué es?</h3>
                  <p>${enfermedades[disease.id].desc}</p>
                  <h3>Tratamiento</h3>
                  <p>${rec}</p>
                </div>`;
    });

    $('div.oneContent').append(card);
  });

  $(document).on('click', '.helpBtnHeader', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .addClass('open');

    $(this).removeClass('helpBtnHeader');
    $(this).addClass('closeBtnHeader');
  });

  $(document).on('click', '.closeBtnHeader', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass('open');

    $(this).removeClass('closeBtnHeader');
    $(this).addClass('helpBtnHeader');
  });

  $(document).on('click', '#continueBtn', function() {
    window.location.href = 'diagnosis.html';
  });
});
