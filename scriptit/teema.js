function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
document.querySelector('.vaihdateema').addEventListener('click', e => {
e.preventDefault();
const chk = document.querySelector('input[name="gender"]:checked').value;
});
