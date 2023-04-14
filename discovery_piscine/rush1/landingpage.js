const images = [
  "https://www.un.org/development/desa/disabilities/wp-content/uploads/sites/15/2019/07/E-SDGs-Poster-801x476.png",
  "https://www.floraandfauna.com.au/media/wysiwyg/What-Are-The-17-Sustainable-Development-Goals.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-WKfq8ejlr611Q6yW5A5Mj-FQeie3ElzkQ&usqp=CAU"
];

let currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
}

setInterval(changeBackground, 5000);

function transport() {
  alert("TEST");

}

