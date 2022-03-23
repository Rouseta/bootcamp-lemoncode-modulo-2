var hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img:
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img:
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
};
//Varios Hoteles

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles.Mencey.name + " & " + hoteles.Lani.name;
document.getElementById("location-hotel").innerHTML =
    "Ubicados en " + hoteles.Mencey.location + " y " + hoteles.Lani.location + " respectivamente";
document.getElementById("img-hotel").src = hoteles.Mencey.img;
document.getElementById("img-hotel2").src = hoteles.Lani.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";
var anonymous = confirm("¿Quieres enviar esta reseña de forma anónima?")
document.getElementById("anonymous").checked = anonymous