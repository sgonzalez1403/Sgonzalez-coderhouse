
function menuPrincipal() {
let total= 0
let menu
do {
  menu = prompt("1- Armar mi PC \n\n  2-Cerrar cuenta \n\n 3-Salir");
  menu = parseInt(menu);
  switch (menu) {
    case 1:
      total = total + tarjetasGraficas() + placasMadre() + Procesadores() + Ram() ;
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
  let tipo = prompt("Ingrese el modelo de tarjeta gráfica que desea utilizar \n\n 1-RTX3070 \n\n  2-RTX3060 \n\n  3-RTX3050 \n\n  4-GTX1660");
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


function placasMadre(){

  let acumulador = 0;
  alert("Seleccione su placa madre");
  let tipo = prompt("Ingrese el modelo de Placa madre que desea utilizar \n\n  1-Asus A320M-K \n\n  2-Gigabyte GA-A320M-H \n\n  3-ASUS PRO A320M-R WI-FI/CSM");
  tipo = parseInt(tipo);

  switch (tipo) {
    case 1:
      acumulador = 15000;
      break;

    case 2:
      acumulador = 20000;
      break;

    case 3:
      acumulador = 25000;
      break;
  
    default:
      alert("opción invalida");
  }
  return acumulador

  

}

function Procesadores(){

  let acumulador = 0;
  alert("Seleccione su procesador");
  let tipo = prompt("Ingrese el modelo de tarjeta gráfica que desea utilizar \n\n  1-Ryzen 3 \n\n  2-Ryzen 5 \n\n  3-Ryzen 7");
  tipo = parseInt(tipo);

  switch (tipo) {
    case 1:
      acumulador = 40000;
      break;

    case 2:
      acumulador = 50000;
      break;

    case 3:
      acumulador = 60000;
      break;
  
    default:
      alert("opción invalida");
  }
  return acumulador
}
function Ram(){

  let acumulador = 0;
  alert("Seleccione cantidad de ram");
  let tipo = prompt("Ingrese la cantidad de ram que desea utilizar \n\n  1-16gb \n\n  2-32GB \n\n  3-64GB");
  tipo = parseInt(tipo);

  switch (tipo) {
    case 1:
      acumulador = 40000;
      break;

    case 2:
      acumulador = 50000;
      break;

    case 3:
      acumulador = 60000;
      break;
  
    default:
      alert("opción invalida");
  }
  return acumulador
}

menuPrincipal()