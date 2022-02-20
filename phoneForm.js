"use strict";
function mostrarValoracion(){
    let valoracion = document.getElementById("valoracion").value;
    alert("Has valorado con " + valoracion + " puntos");
}

function mostrarCuenta(){
    let pais = document.getElementById("pais").value;
    let iban = document.getElementById("iban").value;
    let entidad = document.getElementById("entidad").value;
    let sucursal = document.getElementById("sucursal").value;
    let dc = document.getElementById("dc").value;
    let cuenta = document.getElementById("cuenta").value;
    let salida = pais.concat(iban, "-", entidad, "-", sucursal, "-", dc, "-", cuenta);
    alert("Le informamos que su cuenta bancaria es: " + salida);
}

function mostrarDiaSemana(){
    const fechaEncuesta = new Date(document.getElementById("fecha").value).getDay();
    const diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
    const diaSemana = diasSemana[fechaEncuesta];
    alert("La fecha seleccionada en el elemento de fecha es un " + diaSemana);
}