$(document).ready(function() {
  $(window).on('load', function() {
    var result = JSON.parse(localStorage.getItem('result'));
    var possibleDisease = result[0];
    var disease = enfermedades[possibleDisease.id];
    var total = 0;

    result.forEach(disease => {
      total += disease.total;
    });

    console.log(total);

    var probability = Math.round((possibleDisease.total * 100) / total);

    var card = `<div class="diagnosis open">
            <div class="header">
              <div class="left">
                <h2>${disease.name}</h2>
                <p>${probability}% de probabilidad</p>
              </div>
            </div>
            <h3>¿Qué es?</h3>
            <p>${disease.desc}</p>
            <h3>Tratamiento</h3>
            <p>${disease.rec}</p>
          </div>`;

    $('.oneContent').append(card);
  });

  $('#finishBtn').on('click', function() {
    localStorage.clear();
    $(location).attr('href', 'index.html');
  });
});
