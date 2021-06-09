function img_find() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    if (!images[i].alt) images[i].style.border = "5px solid red";
  }
}
window.addEventListener("load", function () {
  img_find();
});
