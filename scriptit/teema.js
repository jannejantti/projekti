function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.querySelector('#teemanappi').addEventListener('click', e =>{
  e.preventDefault();
  const chk = document.querySelector('input[name="gender"]:checked').value;

if (chk=='Vaalea'){
  console.log("vaalea");
  document.body.style.background="white";
  document.body.style.color="black";
}
else if (chk=='Tumma'){
  console.log("tumma")
  document.body.style.background="black";
  document.body.style.color="white";
}
else if (chk=='Sateenkaari'){
  console.log("sateenkaari")
  document.body.style.background="pink";
  document.body.style.color="limegreen";
}
});