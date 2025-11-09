function hola (){
    alert ('moristejuasjuas')
}

function problema2(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    if(!isNaN(num3) && !isNaN(num3) && !isNaN(num3)){
    var arreglonums = [num1,num2,num3];
    var resultado = Math.max(...arreglonums)
    document.getElementById("output_p2").textContent = "El numero mayor es: " + resultado.toFixed(2);
    }else{
        alert("Por favor rellene los campos")
    }
}

function adivinar(){
    var numad = parseFloat(document.getElementById("num").value);

    document.getElementById("adivinanza-out").textContent = "Validando estructura de datos...";

    setTimeout(
        function() {
            document.getElementById("adivinanza-out").textContent = "Iniciando rutina de cómputo secuencial..."; 
        }, 3000
    );

    setTimeout(
        function() {
            document.getElementById("adivinanza-out").textContent = "Serializando datos de entrada..."; 
        }, 5000
    );

    setTimeout(
        function() {
            document.getElementById("adivinanza-out").textContent = "Sincronizando hilos de procesamiento..."; 
        }, 7000
    );

    setTimeout(
        function() {
            document.getElementById("adivinanza-out").textContent = "El numero en el que esta pensando es: " + numad; 
        }, 9000
    );
}