var hidden = document.getElementsByClassName('hid');
var images = document.getElementsByClassName('nesting');
// var back = document.getElementById('back');
// back.addEventListener('click', imgUnpress);
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', imgPress);
}

function imgPress() {
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].style.display = 'initial';
  }
};

function imgUnpress() {
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].style.display = 'none';
  }
};




// var navlinks = document.getElementsByClassName('navitem');
// for (var i = 0; i < navlinks.length; i++) {
//   navlinks[i].addEventListener('click', toggleUnderline);
// }
//
// function toggleUnderline() {
//   for (var i = 0; i < navlinks.length; i++) {
//     if (navlinks[i].classList.contains("active")) {
//       navlinks[i].classList.toggle("active");
//     }
//   }
//   this.classList.toggle("active");
// }



// var twits = document.getElementsByClassName('twit-content');
// var twitText = document.getElementsByClassName('twit-text');
// var twitNames = document.getElementsByClassName('twit-attribution');
// var input = document.getElementById('navbar-search-input');
//
// var searchButton = document.getElementById('navbar-search-button');
//
// var fabButton = document.getElementById('create-twit-button');
// var close = document.getElementsByClassName('modal-close-button');
// var cancel = document.getElementsByClassName('modal-cancel-button');
// var accept = document.getElementsByClassName('modal-accept-button');
// var inputText = document.getElementById('twit-text-input');
// var inputAuthor = document.getElementById('twit-attribution-input');
// fabButton.onclick = function fabPress() {
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].style.display = 'initial';
//     inputText.value = "";
//     inputAuthor.value = "";
//   }
// };
// cancel[0].onclick = function close() {
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].style.display = 'none';
//   }
// };
// close[0].onclick = function close() {
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].style.display = 'none';
//   }
// };
//
// accept[0].onclick = function addElement() {
//   if (inputText.value != "" && inputAuthor.value != "") {
//     var newArt = document.createElement('div');
//     newArt.classList.add('twit');
//     var newDivIcon = document.createElement('div');
//     newDivIcon.classList.add('twit-icon');
//     var newImg = document.createElement('i');
//     newImg.classList.add('fa');
//     newImg.classList.add('fa-bullhorn');
//     newDivIcon.appendChild(newImg);
//     newArt.appendChild(newDivIcon);
//
//     var newContent = document.createElement('div');
//     newContent.classList.add('twit-content');
//     var newP = document.createElement('p');
//     newP.classList.add('twit-text');
//     newP.textContent = inputText.value;       //CHECK TO SEE IF HACKABLE
//     var newA = document.createElement('p');
//     newA.classList.add('twit-attribution');
//     newLink = document.createElement('a');
//     newLink.setAttribute('href', '#');
//     newLink.textContent = inputAuthor.value;
//     newA.appendChild(newLink);
//     newContent.appendChild(newP);
//     newContent.appendChild(newA);
//     newArt.appendChild(newContent);
//
//     var twitContainer = document.getElementsByClassName('twit-container');
//     twitContainer[0].appendChild(newArt);
//
//     for (var i = 0; i < hidden.length; i++) {
//       hidden[i].style.display = 'none';
//     }
//   }
//   else {
//     alert("You have not filled in all of the required fields!");
//   }
//
// };
//
// searchButton.onclick = function inputPress() {
//   for (var i = 0; i < twits.length; i++) {
//     if (twitText[i].innerHTML.toLowerCase().indexOf(input.value) > -1 || twitNames[i].innerHTML.toLowerCase().indexOf(input.value) > -1) {
//       twits[i].parentElement.style.display = 'flex';
//     }
//     else {
//       twits[i].parentElement.style.display = 'none';
//     }
//   }
// };
//
// input.onkeyup = function inputPress() {
//   for (var i = 0; i < twits.length; i++) {
//     if (twitText[i].innerHTML.toLowerCase().indexOf(input.value) > -1 || twitNames[i].innerHTML.toLowerCase().indexOf(input.value) > -1) {
//       twits[i].parentElement.style.display = 'flex';
//     }
//     else {
//       twits[i].parentElement.style.display = 'none';
//     }
//   }
// };
