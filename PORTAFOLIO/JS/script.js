let precio = 45;

let cantidad = document.getElementById("cantidad");
let total = document.getElementById("total");

cantidad.addEventListener("input", function(){
    total.textContent = precio * cantidad.value;
});
const btnPago = document.getElementById("btnPago");
const opcionesPago = document.getElementById("opcionesPago");

btnPago.addEventListener("click", function(){
    opcionesPago.style.display = "block";
});
const qr = document.getElementById("qr");
const mostrarQR = document.getElementById("mostrarQR");

qr.addEventListener("change", function(){

    mostrarQR.style.display = "block";

});