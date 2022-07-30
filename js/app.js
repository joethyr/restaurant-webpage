$(window).scroll(function () {
  $("h1").toggleClass("scrolled", $(this).scrollTop() > 50);
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
  $("nav a").toggleClass("scrolled", $(this).scrollTop() > 50);
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})