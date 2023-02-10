const promos =[
    {nombre:"promo1", precio:"2000"},
    {nombre:"promo2", precio:"2500"},
    {nombre:"promo3", precio:"1500"},
    {nombre:"promo4", precio:"1200"},
]

let carrito = []

let opcion = prompt("¿Querés comprar algo? (si/no)");

while(opcion !="si" && opcion != "no"){
    alert("ingresá si o no")
    opcion = prompt("¿Querés comprar algo? (si/no)")
}

if (opcion == "si"){
    alert("Empecemos");
    let todasLasPromos = promos.map(
        (promo) => promo.nombre + " " + promo.precio + "$");

    alert(todasLasPromos.join(" - "));
}
else if(opcion =="no") {
    alert("nos vemos")
}

while(opcion != "no") {
    let promo = prompt("Agregá una promo para armar tu carrito");
    let precio = 0;

    if(promo == "promo1" || promo == "promo2" || promo == "promo3" || promo == "promo4"){
        switch(promo) {
          case "promo1":
            precio = 2000;
            break;
          case "promo2":
            precio = 2500;
            break;
          case "promo3":
            precio = 1500;
            break;
          case "promo4":
            precio = 1200;
            break;

          default: 
            alert("elegí una opción válida");
            break;
        }
    let unidades = parseInt(prompt(`¿Cuántas ${promo} vas a querer? "Ingresá un NÚMERO"`))

    carrito.push({promo, unidades, precio});
    console.log(carrito);
    } else {
        alert("elegí una opción válida")
    }

    opcion = prompt("¿Desea seguir comprando? (<no> para salir)")

    while(opcion == "no"){
        alert("Gracias por la compra, nos vemos!")
        carrito.forEach((carritoFinal)=> {
            console.log(`promo: ${carritoFinal.promo}, unidades: ${carritoFinal.unidades}, 
            total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0);
console.log("el total por su compra es de " + total);