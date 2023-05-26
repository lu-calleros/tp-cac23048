const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const total = document.getElementById("total");
const botonBorrar = document.getElementById("borrar");
const botonResumen = document.getElementById("resumen");
const valorInicial = 200;

function calcular() {
  var cant = cantidad.value;
  var cat = categoria.value;

  if (cant <= 0) {
    alert("Atencion, no es una cantidad valida para la compra de entradas.");
    borrarTodo();
  } else {
    switch (cat) {
      case "estudiante":
        var totalGen = valorInicial * cant;
        var desc = totalGen * 0.8;
        var valTotal = totalGen - desc;
        break;
      case "trainee":
        var totalGen = valorInicial * cant;
        var desc = totalGen * 0.5;
        var valTotal = totalGen - desc;
        break;
      case "junior":
        var totalGen = valorInicial * cant;
        var desc = totalGen * 0.15;
        var valTotal = totalGen - desc;
        break;
    }
    /* if (cat=="estudiante")
            {
                var totalGen=valorInicial*cant;
                var desc=totalGen*0.8;
                var valTotal=totalGen-desc;
            }
            else if (cat=="trainee")
            {
                var totalGen=valorInicial*cant;
                var desc=totalGen*0.5;
                var valTotal=totalGen-desc;
            }
            else{
                var totalGen=valorInicial*cant;
                var desc=totalGen*0.15;
                var valTotal=totalGen-desc;
            } */
  }
  total.value = "Total a Pagar: $" + valTotal;
}
botonResumen.addEventListener("click", calcular);

function borrarTodo() {
  cantidad.value = "";
  total.value = "";
  return valTotal;
}
botonBorrar.addEventListener("click", borrarTodo);
