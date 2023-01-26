let precioPromoDeseada = 0;
let precioPromo1 = 2000;
let precioPromo2 = 2500;
let precioPromo3 = 1500;
let precioPromo4 = 1200;

let inicio = prompt("Hola, ¿querés comprar algo? (SI/NO)");

while(inicio != "SI" && inicio != "NO"){
    alert("Ingresá SI o NO");
    inicio = prompt("Hola, ¿querés comprar algo? (SI/NO)");
}

if(inicio == "SI"){
    alert("EMPECEMOS!")
}
else if(inicio == "NO"){
    alert("Nos vemos!")
}



function preguntarPromoDeseada(){
let promoDeseada = prompt("¿Qué promo vas a querer? (1,2,3 o 4)");

if(promoDeseada == "1" || promoDeseada == "2" || promoDeseada == "3" || promoDeseada == "4"){
    switch(promoDeseada){
        case "1":
            alert("Elegiste PROMO 1")
            precioPromoDeseada = precioPromoDeseada + precioPromo1;
            break;
        case "2":
            alert("Elegiste PROMO 2")
            precioPromoDeseada = precioPromoDeseada + precioPromo2;

            break;
        case "3":
            alert("Elegiste PROMO 3")
            precioPromoDeseada = precioPromoDeseada + precioPromo3;

            break;
        case "4":
            alert("Elegiste PROMO 4")
            precioPromoDeseada = precioPromoDeseada + precioPromo4;

            break;
        default:

            break;
    }
}
else {
    alert("Ingresá una opción válida")
}
}


function preguntarMas(){
    let llevarMas = prompt("¿Vas a querer algo más? (SI/NO)")

    while(llevarMas != "SI" && llevarMas != "NO"){
        alert("Ingresá SI o NO");
        llevarMas = prompt("¿Vas a querer algo más? (SI/NO)")
    }
    
    if(llevarMas == "SI"){
        preguntarPromoDeseada()
        preguntarMas()
        }
    else if(llevarMas == "NO"){
        alert("Gracias por tu compra!. Su total es = " + precioPromoDeseada + "$")
        }
    }

if(inicio == "SI"){
    preguntarPromoDeseada();
    preguntarMas();
}
