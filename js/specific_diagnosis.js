$(document).ready(function() {
  $(window).on('load', function() {
    var name = localStorage.getItem('name');
    var result = JSON.parse(localStorage.getItem('result'));
    var selected = JSON.parse(localStorage.getItem('selected'));

    if (!name) {
      alert('No has iniciado el proceso de diagnóstico');
      $(location).attr('href', 'about_you.html');
      return;
    }

    if (!selected) {
      alert('No has seleccionado las enfermedades que crees tener');
      $(location).attr('href', 's2.html');
      return;
    }

    var card = '';
    var diseases = result.filter(disease => -1 !== selected.indexOf(disease.id));
    var total = result.reduce((sum, diseases) => sum + diseases.total, 0);
    // ██╗   ██╗███╗   ███╗██████╗ ██████╗  █████╗ ██╗
    // ██║   ██║████╗ ████║██╔══██╗██╔══██╗██╔══██╗██║
    // ██║   ██║██╔████╔██║██████╔╝██████╔╝███████║██║
    // ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██╗██╔══██║██║
    // ╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║██║  ██║███████╗
    //  ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
    probabilityOf = result.filter(disease => disease.total > 0.8);
    console.log(probabilityOf);

    if (probabilityOf.length > 1) {
      diseases.forEach(disease => {
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
      $('.buttonsArea')
        .empty()
        .append('<button class="primaryBtn" name="button" id="continueBtn">Continuar</button>');
    } else {
      card = `<div class="diagnosis">
                  <div class="header">
                    <div class="left">
                      <h2>No pudimos diagnosticar alguna enfermedad 🤔</h2>
                      <p>El cuadro de síntomas no corresponde con alguna enfermedad registrada en el sistema comprueba las enfermedades seleccionadas o verifica los síntomas</p>
                    </div>
                  </div>
                </div>`;
      $('.buttonsArea')
        .empty()
        .append('<button class="primaryBtn" name="button" id="backBtn">Regresar</button>');
    }
    $('div#inner')
      .empty()
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
    $(location).attr('href', 'diagnosis.html');
  });
  $(document).on('click', '#backBtn', function() {
    localStorage.clear();
    $(location).attr('href', 's2.html');
  });
});
