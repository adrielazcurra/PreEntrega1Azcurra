const shopContenido = document.getElementById("shopContenido")
const verCarrito = document.getElementById("verCarrito")
const recuperarCarrito = document.getElementById("recuperarCarrito")
const modalContainer = document.getElementById("modal-container")

const promos =[
    {
        id: 1,
        nombre:"Promo 1", 
        precio: 2130,
        img: "https://vinotecalavia.com/4852-large_default/fernet-branca-750cc-1-coca-cola-225lt.jpg",
    },
    {
        id: 2,
        nombre:"Promo 2", 
        precio: 1040,
        img: "https://vinotecalavia.com/4688-large_default/gancia-950cc-1-sprites-225-lts.jpg",
    },
    {
        id: 3,
        nombre:"Promo 3", 
        precio: 1420,
        img: "https://vinotecalavia.com/4853-large_default/campari-de-750-cc-2-cepita-de-naranja-1lt.jpg",
    },
    {
        id: 4,
        nombre:"Promo 4", 
        precio: 1350,
        img: "https://vinotecalavia.com/4433-large_default/2-botellas-de-coca-cola-de-225-1-botella-de-sprite-de-225.jpg",
    },
]

let carrito = [];

promos.forEach((promo)=> {
    let contenido = document.createElement("div");
    contenido.className = "card";

    contenido.innerHTML = `
    <img src="${promo.img}">
    <h3>${promo.nombre}</h3>
    <p class="precio">${promo.precio} $</p>
    `;

    shopContenido.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    
    contenido.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: promo.id,
            img: promo.img,
            nombre: promo.nombre,
            precio: promo.precio,
        });
        console.log(carrito);
        saveLocal();
    })
})

modalContainer.style.height= "0px"

const pintarCarrito = () => {
    modalContainer.style.height= "80%"
    modalContainer.innerHTML= "";
    modalContainer.style.display = "flex";
    const modalHeader= document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    const modalButton = document.createElement("h1");
    modalButton.innerHTML = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
        
    })
    
    modalHeader.append(modalButton);

    carrito.forEach((promo) =>{

    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${promo.img}">
    <h3>${promo.nombre}</h3>
    <p>${promo.precio} $</p>
    `;

    modalContainer.append(carritoContent)
    })



    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalCompra);

}    

verCarrito.addEventListener("click", pintarCarrito)

recuperarCarrito.addEventListener("click", () =>{
    carrito = JSON.parse(localStorage.getItem("carrito")) || []

    pintarCarrito();
})


const saveLocal = ()=> {
localStorage.setItem("carrito", JSON.stringify(carrito));
}



