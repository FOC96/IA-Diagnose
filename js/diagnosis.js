$(document).ready(function() {
  $(window).on('load', function() {
    var name = localStorage.getItem('name');
    var result = JSON.parse(localStorage.getItem('result'));

    if (!name) {
      alert('No has iniciado el proceso de diagnóstico');
      $(location).attr('href', 'about_you.html');
      return;
    }

    if (!result) {
      alert('No has seleccionado síntomas');
      $(location).attr('href', 'elements.html');
      return;
    }

    var possibleDisease = result[0];
    let psoibleScoreH = possibleDisease.total;
    let card = '';
    var diseases = result.filter(disease => disease.total === psoibleScoreH);
    var total = 0;
    result.forEach(disease => {
      total += disease.total;
    });

    diseases.forEach(function(disease) {
      let probability = Math.round((disease.total * 100) / total);
      let rec = '';
      enfermedades[disease.id].rec.forEach(function(recommendation) {
        rec += `- ${recommendation} <br/>`;
      });
      card += `<div class="diagnosis open">
                  <div class="header">
                    <div class="left">
                      <h2>${enfermedades[disease.id].name}</h2>
                      <p>${probability}% de probabilidad</p>
                    </div>
                  </div>
                  <h3>¿Qué es?</h3>
                  <p>${enfermedades[disease.id].desc}</p>
                  <h3>Tratamiento</h3>
                  <p>${rec}</p>
                </div>`;
    });

    let prob = Math.round((psoibleScoreH * 100) / total);

    if (prob < 50) {
      alert('El resultado Obtenido no es muy confliable dada su probabilidad 🏥💊');
    }

    $('div#inner')
      .empty()
      .append(card);
  });

  $('#finishBtn').on('click', function() {
    $(location).attr('href', 'index.html');
  });
});
