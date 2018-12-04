$(document).ready(function() {
  $(window).on('load', function() {
    var result = JSON.parse(localStorage.getItem('result'));
    var selected = JSON.parse(localStorage.getItem('selected'));
    var diseases = [];
    var card = '';
    var total = 0;
    diseases = result.filter(disease => -1 !== selected.indexOf(disease.id));
    total = diseases.reduce((sum, diseases) => sum + diseases.total, 0);
    diseases.forEach(function(disease) {
      let probability = Math.round((disease.total * 100) / total);
      let rec = '';
      enfermedades[disease.id].rec.forEach(function(recommendation) {
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
    $('div.oneContent')
      .append(card);
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
