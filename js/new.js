
function menuPrincipal() {
let total= 0
let menu
do {
  menu = prompt("1- Comprar una tarjeta gráfica \n\n  2-Cerrar cuenta \n\n 3-Salir");
  menu = parseInt(menu);
  switch (menu) {
    case 1:
      total = total + tarjetasGraficas();
      break;
    case 2:
      alert ("el total acumulado "+ total);
      total= 0
      break;
      case 3: alert ("Saliendo")
    default:
      alert("opción invalida");
  }
} while (menu != 3);
}

function tarjetasGraficas() {
  let acumulador = 0;
  alert("Seleccione su tarjeta gráfica");
  alert("1-RTX3070 \n\n  2-RTX3060 \n\n  3-RTX3050 \n\n  4-GTX1660");
  let tipo = prompt("Ingrese el modelo de tarjeta gráfica que desea utilizar");
  tipo = parseInt(tipo);

  switch (tipo) {
    case 1:
      acumulador = 300000;
      break;

    case 2:
      acumulador = 250000;
      break;

    case 3:
      acumulador = 200000;
      break;
    case 4:
      acumulador = 150000;
      break;
    default:
      alert("opción invalida");
  }
  return acumulador
}


menuPrincipal()