function calcularCantidad() {
    var x = parseFloat(document.getElementById("percentageX").value);
    var y = parseFloat(document.getElementById("totalY").value);
    var resultado = (x / 100) * y;
    document.getElementById("resultado1").value = resultado;
}

function calcularTotal() {
    var a = parseFloat(document.getElementById("cantidadA").value);
    var b = parseFloat(document.getElementById("porcentajeB").value);
    var resultado = (a * 100) / b;
    document.getElementById("resultado2").value = resultado;
}

function calcularPorcentaje() {
    var c = parseFloat(document.getElementById("cantidadC").value);
    var d = parseFloat(document.getElementById("totalD").value);
    var resultado = (c / d) * 100;
    document.getElementById("resultado3").value = resultado;
}

