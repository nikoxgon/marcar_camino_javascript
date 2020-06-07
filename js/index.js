const body = document.getElementsByTagName('body')[0];
const tablaTamano = 5;
const posFinal = tablaTamano.toString() + tablaTamano.toString();
this.initTabla();

function initTabla() {
  const tabla = document.createElement('table');
  for (let x = 1; x <= tablaTamano; x++) {
    const fila = document.createElement('tr');
    for (let y = 1; y <= tablaTamano; y++) {
      const celda = document.createElement('td');
      celda.id = x.toString() + y.toString();
      if ((x === tablaTamano && y === tablaTamano) || (x === 1 && y === 1)) {
        celda.classList.add('color');
      }
      celda.addEventListener('click', () => clickCelda(celda.id));
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  body.appendChild(tabla);
}

function clickCelda(id) {
  const celdaValida = verifyCeldas(id);
  if (celdaValida) {
    const celda = document.getElementById(id);
    if (celda.classList.contains('color')) {
      alert('Celda ya marcada.');
    } else {
      celda.classList.add('color');
    }
  } else {
    alert('Movimiento incorrecto');
  }
}

function verifyCeldas(id) {
  const ejex = id[0];
  const ejey = id[1];
  const casos = [
    (parseInt(ejex) + 1) + '' + ejey, // x+1 y
    (parseInt(ejex) - 1) + '' + ejey, // x-1 y
    ejex + '' + (parseInt(ejey) + 1), // x y+1
    ejex + '' + (parseInt(ejey) - 1), // x y-1
    (parseInt(ejex) - 1) + '' + (parseInt(ejey) - 1), // x-1 y-1
    (parseInt(ejex) + 1) + '' + (parseInt(ejey) - 1), // x+1 y-1
    (parseInt(ejex) - 1) + '' + (parseInt(ejey) + 1), // x+1 y-1
    (parseInt(ejex) + 1) + '' + (parseInt(ejey) + 1), // x+1 y+1
  ];
  let val = false;
  casos.forEach(pos => {
    console.log(pos);
    if(pos === posFinal){
      setTimeout(() => {
        alert('Juego finalizado.');
      }, 100);
    }
    if (verifyCelda(pos)) {
      val = true;
    }
  });
  return val;
}

function verifyCelda(id) {
  const celda = document.getElementById(id);
  if (celda) {
    if (celda.classList.contains('color')) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
