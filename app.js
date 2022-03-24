// Objetivo 1 [Datos del hotel]
// var hotel = {
//   name: "Mencey",
//   location: "Tenerife",
//   img:
//     "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel["name"];
// document.getElementById("location-hotel").innerHTML =
//   "Ubicado en " + hotel["location"];
// document.getElementById("img-hotel").src = hotel["img"];





var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};
//Varios Hoteles

document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles.Mencey.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " +
  hoteles.Mencey.location;
document.getElementById("img-hotel").src = hoteles.Mencey.img;

document.getElementById("name-hotel2").innerHTML =
  "Hotel " + hoteles.Lani.name;
document.getElementById("location-hotel2").innerHTML =
  "Ubicado en " +
  hoteles.Lani.location;
document.getElementById("img-hotel2").src = hoteles.Lani.img;



// Objetivo 2 [Puntuación del hotel]
// var selectedHotel = prompt("indique hotel sobre el que quere hacer la reseña Mencey o Lani")
// document.getElementById("name-hotel").innerHTML = "hotel " + hoteles[selectedHotel].name
// var rating = prompt("Puntuación: del 1 al 5");

// document.getElementById("rating").innerHTML = rating + " estrellas";
// var anonymous = confirm("¿Quieres enviar esta reseña de forma anónima?");
// document.getElementById("anonymous").checked = anonymous;
var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}
var rating = prompt("Puntuación: una, dos, tres, cuatro, cinco entrellas");
document.getElementById("rating").innerHTML = stars[rating];