cofla = prompt("Cuanto dinero tienes ?");
roberto = prompt("Cuanto dinero tienes ?");
pedro = prompt("Cuanto dinero tienes ?");

cofla = parseInt(cofla);

if ( cofla >= 0.6 && cofla < 1 ) {
    alert("Comprate el helado de agua");
    alert("Tu vuelto es " +(cofla - 0.6 ));
}

else if ( cofla >= 1 && cofla < 1.6) {
    alert("Comprate el helado de crema");
    alert("Tu vuelto es " +(cofla - 1 ));
}

else if ( cofla >= 1.6 && cofla < 1.7 ) {
    alert("Comprate el helado heladix");
    alert("Tu vuelto es " +(cofla- 1.6 ));
}

else if ( cofla >= 1.7 && cofla < 1.8 ) {
    alert("Comprate el helado heladovich");
    alert("Tu vuelto es " +(cofla - 1.7 ));
}

else if ( cofla >= 1.8 && cofla < 2.9 ) {
    alert("Comprate el helado helardo");
    alert("Tu vuelto es " +(cofla - 1.8 ));
}

else if ( cofla >= 2.9 ) {
    alert("Comprate el helado de confites o el de 1/4kg");
    alert("Tu vuelto es " +(cofla - 2.9 ));
}

else {
    alert("No te alcanza para ningun helado");
}

