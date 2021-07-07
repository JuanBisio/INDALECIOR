// Constantes
const li = document.querySelectorAll(".li");
const ul = document.querySelectorAll(".ul");
const bloque = document.querySelectorAll(".bloque");

// ======================= Classe activo =======================
li.forEach((cadaLi, i) => {
  li[i].addEventListener("click", () => {
    li.forEach((cadaLi, i) => {
      li[i].classList.remove("activo");
      bloque[i].classList.remove("activo");
    });
    li[i].classList.add("activo");
    bloque[i].classList.add("activo");
  });
});

// ======================= Carrusel uno =======================
const CarruselContenedor = document.querySelector('.carrusel__contenedor')
const CarruselImage      = document.querySelectorAll('.carrusel__img')
const CarruselPosicion   = document.querySelectorAll('.carrusel__contenedor')
const CarruselFlecha     = document.querySelectorAll('.punto') 

CarruselFlecha.forEach((cadaPunto, i) => {  
  CarruselFlecha[i].addEventListener("click", () => {
    let posicionFlecha = i
    let operacion = posicionFlecha * -23.75

    CarruselContenedor.style.transform = `translateX( ${operacion}%)`

    CarruselFlecha.forEach((cadaPunto, i) => {
      CarruselFlecha[i].classList.remove("activar");
    });
    CarruselFlecha[i].classList.add("activar");
  });
});








// ======================= Carrusel dos =======================
const CarruselContenedor2 = document.querySelector('.carrusel__contenedor2')
const CarruselImage2      = document.querySelectorAll('.carrusel__img2')
const CarruselPosicion2   = document.querySelectorAll('.carrusel__contenedor2')
const CarruselFlecha2     = document.querySelectorAll('.punto2') 

CarruselFlecha2.forEach((cadaPunto, i) => {  
  CarruselFlecha2[i].addEventListener("click", () => {
    let posicionFlecha2 = i
    let operacion2 = posicionFlecha2 * -20

    CarruselContenedor2.style.transform = `translateX( ${operacion2}%)`

    CarruselFlecha2.forEach((cadaPunto, i) => {
      CarruselFlecha2[i].classList.remove("activar2");
    });
    CarruselFlecha2[i].classList.add("activar2");
  });
});
// ======================= Carrusel Tres =======================
const CarruselContenedor3 = document.querySelector('.carrusel__contenedor3')
const CarruselImage3      = document.querySelectorAll('.carrusel__img3')
const CarruselPosicion3   = document.querySelectorAll('.carrusel__contenedor3')
const CarruselFlecha3     = document.querySelectorAll('.punto3') 

CarruselFlecha3.forEach((cadaPunto, i) => {  
  CarruselFlecha3[i].addEventListener("click", () => {
    let posicionFlecha3 = i
    let operacion3 = posicionFlecha3 * -20

    CarruselContenedor3.style.transform = `translateX( ${operacion3}%)`

    CarruselFlecha3.forEach((cadaPunto, i) => {
      CarruselFlecha3[i].classList.remove("activar3");
    });
    CarruselFlecha3[i].classList.add("activar3");
  });
});
// ======================= Carrusel Cuatro =======================
const CarruselContenedor4 = document.querySelector('.carrusel__contenedor4')
const CarruselImage4      = document.querySelectorAll('.carrusel__img4')
const CarruselPosicion4   = document.querySelectorAll('.carrusel__contenedor4')
const CarruselFlecha4     = document.querySelectorAll('.punto4') 

CarruselFlecha4.forEach((cadaPunto, i) => {  
  CarruselFlecha4[i].addEventListener("click", () => {
    let posicionFlecha4 = i
    let operacion4 = posicionFlecha4 * -20

    CarruselContenedor4.style.transform = `translateX( ${operacion4}%)`

    CarruselFlecha4.forEach((cadaPunto, i) => {
      CarruselFlecha4[i].classList.remove("activar4");
    });
    CarruselFlecha4[i].classList.add("activar4");
  });
});
// ======================= Carrusel Quinto =======================
const CarruselContenedor5 = document.querySelector('.carrusel__contenedor5')
const CarruselImage5      = document.querySelectorAll('.carrusel__img5')
const CarruselPosicion5   = document.querySelectorAll('.carrusel__contenedor5')
const CarruselFlecha5     = document.querySelectorAll('.punto5') 

CarruselFlecha5.forEach((cadaPunto, i) => {  
  CarruselFlecha5[i].addEventListener("click", () => {
    let posicionFlecha5 = i
    let operacion5 = posicionFlecha5 * -20

    CarruselContenedor5.style.transform = `translateX( ${operacion5}%)`

    CarruselFlecha5.forEach((cadaPunto, i) => {
      CarruselFlecha5[i].classList.remove("activar5");
    });
    CarruselFlecha5[i].classList.add("activar5");
  });
});
// ======================= Carrusel Sexto =======================
const CarruselContenedor6 = document.querySelector('.carrusel__contenedor6')
const CarruselImage6      = document.querySelectorAll('.carrusel__img6')
const CarruselPosicion6   = document.querySelectorAll('.carrusel__contenedor6')
const CarruselFlecha6     = document.querySelectorAll('.punto6') 

CarruselFlecha6.forEach((cadaPunto, i) => {  
  CarruselFlecha6[i].addEventListener("click", () => {
    let posicionFlecha6 = i
    let operacion6 = posicionFlecha6 * -25

    CarruselContenedor6.style.transform = `translateX( ${operacion6}%)`

    CarruselFlecha6.forEach((cadaPunto, i) => {
      CarruselFlecha6[i].classList.remove("activar6");
    });
    CarruselFlecha6[i].classList.add("activar6");
  });
});

// ======================= Info =======================

const informacionImagenes = document.querySelectorAll('.informacion__imagenes')
const infoImg = document.querySelectorAll('.infoimg')
const imagenes = document.querySelectorAll('.img')

imagenes.forEach((cadaP,i)=>{
  imagenes[i].addEventListener('click', ()=>{
    imagenes.forEach((cadaPunto, i) => {
      informacionImagenes[i].classList.remove("infoimg");
      imagenes[i].classList.remove("zoomImg");
    });
    informacionImagenes[i].classList.add("infoimg");
    imagenes[i].classList.add("zoomImg");

  })
})

