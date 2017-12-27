var modal = document.getElementById('imgModal');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("modalCaption");
var span = document.getElementsByClassName("close")[0];
var images = document.getElementsByClassName('nesting');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', imgPress);
}

span.onclick = function() {
  modal.style.display = "none";
}

function imgPress() {
  modal.style.display = "block";
  modalImg.src = this.children[0].src;
  captionText.innerHTML = this.alt;
};
