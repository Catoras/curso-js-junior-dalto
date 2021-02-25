function problema1() {
  const dineroA = parseInt(prompt("Cuanto dinero tienes A"));
  const dineroB = parseInt(prompt("Cuanto dinero tienes B"));
  const dineroC = parseInt(prompt("Cuanto dinero tienes C"));

  var dineroNiños = [dineroA, dineroB, dineroC];
  var nombresNiños = ["A", "B", "C"];
  var valorHelado = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9];
  var nombreHelado = [
    "Palito de helado de agua",
    "Palito de helado de crema",
    "Bombón helado marca heladix",
    "Bombón helado marca heladovich",
    "Bombón helado marca helardo",
    "Potecito de helado con confites",
    "Pote de 1/4 KG",
  ];
  for (let i = 0; i < dineroNiños.length; i++) {
    let heladosAComprar = [];
    let precioMayorDeHelado = 0;
    for (let j = 0; j < valorHelado.length; j++) {
      if (valorHelado[j] > precioMayorDeHelado && valorHelado[j] <= dineroNiños[i]) {
        precioMayorDeHelado = valorHelado[j];
        heladosAComprar = [];
        heladosAComprar[0] = j;
      }
      else if (valorHelado[j] == precioMayorDeHelado && valorHelado[j] <= dineroNiños[i]) {
        heladosAComprar[heladosAComprar.length] = j;
      }
    }
    if (heladosAComprar.length == 1) {
      console.log(
        `El niño ${nombresNiños[i]} puede comprar el helado ${nombreHelado[heladosAComprar[0]]} con su dinero y le sobrarian $${(dineroNiños[i] - valorHelado[heladosAComprar[0]]).toFixed(2)} pesos.`
      );
    } else if (heladosAComprar.length > 1) {
      let heladosNombresConcatenados = "";
      for(let j = 0; j < heladosAComprar.length; j++){
        if(j==0){
          heladosNombresConcatenados += `${nombreHelado[heladosAComprar[j]]}`;
        }
        else if(j==heladosAComprar.length-1){
          heladosNombresConcatenados += ` y ${nombreHelado[heladosAComprar[j]]}`;
        }
        else{
          heladosNombresConcatenados += `, ${nombreHelado[heladosAComprar[j]]}`;
        }
      }
      console.log(
        `El niño ${nombresNiños[i]} puede comprar los helados ${heladosNombresConcatenados} con su dinero y le sobrarian $${(dineroNiños[i] - valorHelado[heladosAComprar[0]]).toFixed(2)} pesos.`
      );
    } else {
      console.log(
        `El niño ${nombresNiños[i]} no pudo comprar ningun helado con su dinero.`
      );
    }
  }
}

function problema2() {
  var dineroVagabundo = parseInt(prompt("Cuanto le dieron al vagabundo?"));
  const valorBoleto = parseInt(prompt("Cuanto cuesta cada voleto"));
  var cantidadDeBoletos = 0;
  for(let i = 0; i < 2 ; i++){
    if(dineroVagabundo > valorBoleto){
      dineroVagabundo -= valorBoleto;
      cantidadDeBoletos++;
    }
    else
      break;
  }
  console.log(`El Vagabundo pudo comprar ${cantidadDeBoletos} boletos y le sobro $${dineroVagabundo} pesos.`);
}

function problema3() {
  while(true){
    var miente = parseInt(prompt("El sospechoso mintio?\n1) Mintio\n0)No mintio"));
    if(miente == 1){
      alert(`El sospechoso mintio asi que fue electrocutado :)`);
    }
    else if(miente == 0){
      alert(`El sospechoso no miente.`);
    }
    else{
      alert(`La pregunta debe ser mas clara.`);
    }
    alert(`Siguiente Pregunta :)`)
  }
}

//problema1();
//problema2();
//problema3();
