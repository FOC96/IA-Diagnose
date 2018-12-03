# Diagnóstico de Enfermedades aplicando la Lógica Difusa

![](https://img.shields.io/badge/version-1.0.0-green.svg) ![](https://img.shields.io/badge/date-Dec_2018-blue.svg) ![](https://img.shields.io/badge/Node-8.11.2-green.svg) ![](https://img.shields.io/badge/type-School_project-yellow.svg)
![](https://img.shields.io/badge/topic-IA-green.svg) ![](https://img.shields.io/badge/topic-fuzzy_logic-blue.svg)

***

### Enfermedades Respiratorias
Después de definir la agrupación de enfermedades (respiratorias) con las cuales se trabajaría, procedimos a
investigar 3 puntos principales de cada una: sus síntomas, una breve descripción y el tratamiento a seguir
para recuperarse.

A continuación se muestra un resumen de lo indagado.

### Metodología
Para poder diagnosticar la enfermedad correcta, se hizo uso de la lógica difusa al crear intersecciones entre dos cuadros principales que dieron como resultado un tercero. Las 10 enfermedades que puede diagnosticar el sistema son las siguientes:

| E1 Resfriado común o gripa | E6 Faringitis          |
|----------------------------|------------------------|
| E2 Sinusitis               | E7 Amigdalitis         |
| E3 Influenza estacional    | E8 Tuberculosis        |
| E4 Bronquitis              | E9 Bronquiolitis       |
| E5 Neumonía                | E10 Fiebre escarlatina |

##### Cuadro de Enfermedades y Síntomas
El primer cuadro contiene las 10 enfermedades y el total de síntomas con sus respectivas calificaciones. El código que contiene esta información se encuentra en docs/enfermedades.js

##### Cuadro del Usuario
El segundo cuadro se construye a partir de la selección de los síntomas por parte del usuario del sistema y el valor que éste sienta conforme a su molestia. Es decir, el usuario puede seleccionar ‘Dolor de cabeza’ y luego decir que su molestia–en una escala de 0.1 a 1–es de 0.6. 
Para esto, se utilizó la siguiente escala de valores, cuya descripción se le presenta al usuario para que éste entienda

##### Cuadro de Resultados
Este último cuadro se genera con la intersección de los valores del primer cuadro con el del usuario, para identificar qué enfermedad(es) tiene mayor similitud con los síntomas previamente seleccionados.
La siguiente tabla contiene la suma de los síntomas de cada enfermedad, respectivamente. Fue con éste dato con el que se determina qué enfermedad tiene el usuario, con base en probabilidad.

| E1 Resfriado común o gripa | E6 Faringitis          |
|----------------------------|------------------------|
| E2 Sinusitis               | E7 Amigdalitis         |
| E3 Influenza estacional    | E8 Tuberculosis        |
| E4 Bronquitis              | E9 Bronquiolitis       |
| E5 Neumonía                | E10 Fiebre escarlatina |