// 03
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/

let mes = prompt("Ingresá un número de mes. \nATENCIÓN: Debe ser un número del 1 al 12.")
mes = parseInt(mes);

switch (mes) {
    case 1: 
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5: 
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9: 
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
        alert("Noviembre");
        break;
    case 12:
        alert("Diciembre");
        break;
    default:
        alert("El valor ingresado no es correcto");
}


let mes = prompt("Ingresá un número de mes. \nATENCIÓN: Debe ser un número del 1 al 12.")

if (mes == 1) {
    alert("Enero");
}
else if (mes == 2) {
    alert("Febrero");
}
else if (mes == 3) {
    alert("Marzo");
}
else if (mes == 4) {
    alert("Abril");
}
else if (mes == 5) {
    alert("Mayo");
}
else if (mes == 6) {
    alert("Junio");
}
else if (mes == 7) {
    alert("Julio");
}
else if (mes == 8) {
    alert("Agosto");
}
else if (mes == 9) {
    alert("Septiembre");
}
else if (mes == 10) {
    alert("Octubre");
}
else if (mes == 11) {
    alert("Noviembre");
}
else if (mes == 12) {
    alert("Diciembre");
}
else {
    alert("El valor ingresado no es correcto");
}


 // 04
 /******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/

let dia = prompt("Ingresá un día de la semana, porfa!")

try {
    switch (dia) {
        case "lunes": 
            alert(1);
            break;
        case "martes":
            alert(2);
            break;
        case "miércoles":
            alert(3);
            break;
        case "jueves":
            alert(4);
            break;
        case "viernes": 
            alert(5);
            break;
        case "sábado":
            alert(6);
            break;
        case "domingo":
            alert(7);
            break;
        default:
            throw Error;
    }	
} catch (err){
	alert("El valor ingresado no es correcto");
}