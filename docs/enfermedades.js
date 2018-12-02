let enfermedades = [
    {
        name: "Resfriado Común - gripe",
        symp: [0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 0.7, 0.7, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["Escurrimiento", "Congestión nasal (rinorrea)", "Estornudos", "Tos", "Disminución del apetito", "Dolor de cabeza", "Dolores musculares", "Dolor de garganta", "Fiebre de bajo grado"],
        desc: "",
        rec: ["Medicamentos de venta libre (antigripales) para controlar los síntomas", "Beber líquidos en abundancia"]
    },
    {
        name: "Sinusitis",
        symp: [0, 0.9, 0, 0.5, 0.5, 0, 0, 0, 0.7, 0.8, 0.7, 0.7, 0.7, 0.7, 0.6, 0.6, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["Congestión nasal (rinorrea)", "Congestión nasal", "Obstrucción nasal", "Dolor alrededor de los ojos, mejillas, nariz y frente", "Sensibilidad alrededor de los ojos, mejillas, nariz y frente", "Hinchazón alrededor de los ojos, mejillas, nariz y frente", "Reducción del sentido del gusto", "Reducción del sentido del tacto", "Tos", "Dolor de oídos", "Dolor en la mandíbula y dientes superiores", "Dolor de garganta", "Mal aliento (halitosis)", "Fatiga", "Irritabilidad", "Náuseas"],
        desc: "Consiste en la inflamación de los senos paranasales debido a una infección u otro problema. Puede ser crónica y aguda, ambas teniendo síntomas similares. La sinusitis aguda es una infección temporal de los senos paranasales. La sinusitis crónica tiene síntomas más prolongados y suelen causar más fatiga.",
        rec: ["En algunas ocasiones es necesario el tratamiento con 0antibióticos (aprox. 14 días)", "En el caso de la sinusitis crónica, la enfermedad debe tratarse entre tres y cuatro semanas.", "Beber mucho líquido para diluir las secreciones.", "Inhalar vapor, de dos a cuatro veces al día.", "Utilizar un humidificador para reducir la sequedad ambiental.", "Aplicar paños calientes y húmedos en la cara varias veces al día.", "Usar descongestionantes nasales."]
    },
    {
        name: "Influenza estacional",
        symp: [0.7, 0.7, 1, 0, 0.8, 0, 0.7, 0.7, 0.7, 0, 0, 0, 0, 0, 0.6, 0, 0.3, 0.7, 0.7, 0.6, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["En algunas ocasiones es necesario el tratamiento con 0antibióticos (aprox. 14 días)", "En el caso de la sinusitis crónica, la enfermedad debe tratarse entre tres y cuatro semanas.", "Beber mucho líquido para diluir las secreciones.", "Inhalar vapor, de dos a cuatro veces al día.", "Utilizar un humidificador para reducir la sequedad ambiental.", "Aplicar paños calientes y húmedos en la cara varias veces al día.", "Usar descongestionantes nasales."],
        desc: "Es una infección viral de las vías respiratorias altas, las cuales incluyen la nariz, los bronquios y los pulmones.",
        rec: ["Beber muchos líquidos", "Descansar", "Analgésicos de venta libre (Paracetamol o ibuprofeno)"]
    },
    {
        name: "Bronquitis",
        symp: [0, 0, 0, 0.6, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0.6, 0, 0, 0, 0.7, 0.7, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["Tos", "Producción de mucosidad", "Fatiga", "Dificultad para respirar", "Fiebre ligera", "Escalofríos", "Molestia en el pecho"],
        desc: "Es una enfermedad en la que los bronquios se inflaman. Los bronquios son los conductos o tubos que llevan el aire a los pulmones.",
        rec: ["Tomar líquidos", "Usar inhalador en caso de tener asma u otra afección pulmonar", "Descansar mucho", "Utilizar un humidificador o vapor en el baño"]
    },
    {
        name: "Neumonía",
        symp: [0, 0, 1, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7, 0, 0.4, 0, 0.7, 0, 0.5, 0.5, 0, 0.7, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["Dificultad para respirar,", "Fiebre alta", "Escalofríos", "Tos con flema", "Dolor en el pecho al respirar o toser", "Desorientación (+65 años)", "Fatiga", "Temperatura más baja de lo normal (+65 años)", "Náuseas", "Vómito", "Diarrea"],
        desc: "Es una infección del pulmón que puede ser causada por múltiples microorganismos (bacterias, virus y hongos). Los sacos de aire de los pulmones (llamados 'alvéolos') se llenan de pus y otros líquidos, lo cual dificulta la llegada del oxígeno al torrente sanguíneo. Las neumonías se clasifican según se adquieren en el día a día de una persona (neumonía adquirida en la comunidad) o en un centro sanitario (neumonía hospitalaria).",
        rec: ["Aplicación de antibióticos (prescritos por un médico).", "Aplicación de analgésicos para la fiebre y el malestar.", "Medicamento para la tos."]
    },
    {
        name: "Faringitis",
        symp: [0, 0, 0.6, 0, 0, 0, 0.5, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8, 0.6, 0, 0, 0.7, 0.7, 0, 0, 0, 0, 0],
        sympDesc: ["Voz ronca", "Fiebre", "Dolor de cabeza", "Dolores musculares y articulares", "Erupción cutánea", "Dolor de garganta al tragar", "Ganglios inflamados en el cuello."],
        desc: "Es una afección que cursa con irritación, inflamación o infección de la faringe, y muy particularmente de su tejido linfoide. La faringitis aguda es una infección producida por virus o bacterias. En muchos de estos cuadros aparece un agrandamiento doloroso de los ganglios del cuello (linfadenitis reactiva), ya que en ellos también existe tejido linfoide.",
        rec: ["Aplicación de antibiótico (recetado por el médico)", "Tomar líquidos", "Usar un vaporizador o humidificador", "Probar con analgésicos de venta libre"]
    },
    {
        name: "Amigdalitis",
        symp: [0, 0, 0.6, 0, 0, 0, 0.7, 0, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0.8, 0.8, 0.7, 0.2, 0.6, 0, 0, 0],
        sympDesc: ["Amígdalas rojas e inflamadas", "Parches o recubrimientos blancos o amarillos en las amígdalas", "Dolor de garganta", "Dificultad o dolor al tragar", "Fiebre", "Glándulas sensibles y dilatadas (ganglios linfáticos) en el cuello", "Mal aliento", "Dolor estomacal, en especial en los niños pequeños", "Rigidez en el cuello", "Dolor de cabeza"],
        desc: "La amigdalitis es una inflamación de las amígdalas. A veces, junto con la amigdalitis, las adenoides también se hinchan.",
        rec: ["Descansar", "Tomar líquidos", "Probar alimentos blandos si tragar es doloroso", "Tratar de consumir líquidos calientes", "Consumir alimentos fríos como paletas de hielo", "Estar libre de humo de cigarro"]
    },
    {
        name: "Tuberculosis",
        symp: [0, 0, 0.6, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0.8, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7, 0.6, 0.6],
        sympDesc: ["Pérdida de peso", "Debilidad", "Tos intensa", "Tos con sangre", "Fiebre", "Fatiga", "Escalofríos y sudoración"],
        desc: "Es un tipo de infección pulmonar causada por la bacteria Mycobacterium tuberculosis, que causa una inflamación crónica.",
        rec: ["Tomar medicamentos prescritos por un médico"]
    },
    {
        name: "Bronquiolitis",
        symp: [0, 0.7, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sympDesc: ["Congestión Nasal", "Dificultad para respirar", "Tos leve", "Fiebre o no (fiebre baja)", "Moqueo de nariz"],
        desc: "Es una infección que afecta los bronquiolos, siendo considerada una infección respiratoria baja y suele afectar principalmente a niños menores de 2 años.",
        rec: ["Mantener reposo", "Beber mucha agua", "Mantener el aire húmedo", "Evitar sitios con mucho humo o polvo", "Realizar nebulizaciones"]
    },
    {
        name: "Fiebre escarlatina",
        symp: [0, 0, 1, 0, 0, 0, 0.6, 0, 0.8, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.8, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.7],
        sympDesc: ["Erupción cutánea de color rojo", "Cara ruborizada.", "Garganta muy dolorida y roja, ", "a veces con manchas blancas o amarillentas", "Dolor de cabeza", "náuseas", "vómitos", "Fiebre mayor a 38°C"],
        desc: "La escarlatina es una enfermedad bacteriana que se presenta en algunas personas que tienen amigdalitis estreptocócica. La escarlatina, también conocida como «fiebre escarlata», se caracteriza por una erupción cutánea de color rojo brillante que recubre la mayor parte del cuerpo. La escarlatina casi siempre está acompañada de dolor de garganta y fiebre alta.",
        rec: ["Consultar a un médico inmediatamente"]
    },
]
