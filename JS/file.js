let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// When the user clicks on the button, scroll to the top of the document
/*----------------------------------------------------------------*/
function activate(e){
  e.setAttribute("id","active");
  e.setAttribute("class","rounded-pill");
}
function deactivate(e){
  e.removeAttribute("id","active");
  e.removeAttribute("class","rounded-pill");
}