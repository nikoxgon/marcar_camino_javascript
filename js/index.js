tablaTamano = 5;
posFinal = this.tablaTamano.toString() + this.tablaTamano.toString();
pasos = 0;
this.initTabla();

function initTabla() {
  const body = document.getElementsByTagName('body')[0];
  const tabla = document.createElement('table');
  for (let x = 1; x <= this.tablaTamano; x++) {
    const fila = document.createElement('tr');
    for (let y = 1; y <= this.tablaTamano; y++) {
      const celda = document.createElement('td');
      celda.id = x.toString() + y.toString();
      if ((x === this.tablaTamano && y === this.tablaTamano) || (x === 1 && y === 1)) {
        celda.classList.add('color');
      }else{
        celda.addEventListener('click', () => clickCelda(celda.id));
      }
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
      this.pasos++;
    }
  } else {
    alert('Movimiento incorrecto');
  }
}

function verifyCeldas(id) {
  const ejex = id[0];
  const ejey = id[1];
  const casos = [
    (parseInt(ejex) + 1) + '' + ejey, // x+1 y (Abajo)
    (parseInt(ejex) - 1) + '' + ejey, // x-1 y (Arriba)
    ejex + '' + (parseInt(ejey) + 1), // x y+1 (Derecha)
    ejex + '' + (parseInt(ejey) - 1), // x y-1 (Izquierda)
    // (parseInt(ejex) - 1) + '' + (parseInt(ejey) - 1), // x-1 y-1
    // (parseInt(ejex) + 1) + '' + (parseInt(ejey) - 1), // x+1 y-1
    // (parseInt(ejex) - 1) + '' + (parseInt(ejey) + 1), // x+1 y-1
    // (parseInt(ejex) + 1) + '' + (parseInt(ejey) + 1), // x+1 y+1
  ];
  let val = false;
  let casosPintados = [];
  casos.forEach(caso => {
    if (verifyCelda(caso) ) {
      casosPintados.push(caso);
      val = true;
    }
  });

  casosPintados.forEach(caso => {
    if(caso === casos[2]){
      val = false;
    }
  });

  if(val){
    casos.forEach(caso => {
      if(caso === this.posFinal){
        setTimeout(() => {
          alert('Juego finalizado. Pasos realizados: ' + this.pasos);
        }, 100);
      }
    });
  }
  return val;
}

function verifyCelda(id) {
  const celda = document.getElementById(id);
  if (celda) {
    if (celda.classList.contains('color') && celda.id !== this.posFinal) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
