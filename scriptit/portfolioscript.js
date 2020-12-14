
const nimi = 'Janne Jantti'; 
const ika = 16; 
const onkoopiskelija = true; 

console.log(nimi);
console.log(ika);
console.log('Onko opiskelija:' + ' ' + onkoopiskelija);



const opiskelija = onkoopiskelija === true ? 'opiskelija' : 'ammattilainen';
console.log(opiskelija);



const surffaaja = `Hei sivuilleni surffaaja, olen ${nimi} ja olen ${ika}-vuotias ${opiskelija}`;
console.log(surffaaja);



var henkilo1 = "1.ystäväni: Timo Nieminen";
var henkilo2 = "2.ystäväni: Matti Korhonen";
var henkilo3 = "3.ystäväni: Kari Koskinen";
var henkilo4 = "4.ystäväni: Seppo Nieminen";
console.log(henkilo1, henkilo2, henkilo3, henkilo4);
console.log(henkilo1.split(' '));
console.log(henkilo2.split(' '));
console.log(henkilo3.split(' '));
console.log(henkilo4.split(' '));

const perhe = [
  {
    id: 1,
    etunimi: 'Kai',
    ika: 42,
    taysiikainen: true
  },
  {
    id: 2,
    etunimi: 'Virpi',
    ika: 40,
    taysiikainen: true
  },
  {
    id: 3,
    etunimi: 'Suvi',
    ika: 21,
    taysiikainen: true
  },
  {
    id: 4,
    etunimi: 'Saku',
    ika: 18,
    taysiikainen: true
  },
  {
    id: 5,
    etunimi: 'Janne',
    ika: 16,
    taysiikainen: false
  }];
console.log(perhe);

const perhe1Mappaus = perhe.map(function (perhe1) {
  return perhe1;
});
console.log(perhe1Mappaus);

const perhe2Filter = perhe.filter(function (perhe2) {
  return perhe2.taysiikainen === true;
}).map(function (perhe2) {
  return perhe2.etunimi;
});
console.log(perhe2Filter);

const perhe3Filter = perhe.filter(function (perhe3) {
  return perhe3.taysiikainen === false;
}).map(function (perhe3) {
  return perhe3.etunimi;
});
console.log(perhe3Filter);

function kaikkiiat(ekaNumero, tokaNumero, kolmasNumero, neljasNumero) {
  return ekaNumero + tokaNumero + kolmasNumero + neljasNumero;
}
console.log(kaikkiiat(42, 40, 21, 18));

const nimiSisalto = document.querySelector('#nimi');
const sukunSisalto = document.querySelector('#sukunimi');
const sahkoSisalto = document.querySelector('#sahkoposti');
const virhe = document.querySelector('.virheilmoitus');
const nappula = document.querySelector('.nappula');

nappula.addEventListener('click', e => {
  e.preventDefault();

  if (nimiSisalto.value === '' || sahkoSisalto.value === '') {
    nimiSisalto.classList.add('nimiSisalto');
    nimiSisalto.innerHTML = 'Täytä tämäkin kohta *PAKOLLINEN*';

    sahkoSisalto.classList.add('sahkoSisalto');
    sahkoSisalto.innerHTML = 'Täytä tämäkin kohta *PAKOLLINEN*';

    nappula.style.background = 'red';
    nappula.value = 'Et täyttänyt pakollisia kohtia!';
    setTimeout(() => nappula.value = 'Lähetä', 3000);
    setTimeout(() => nappula.style.background = 'rgb(255, 255, 255)', 3000);

    nimiSisalto.style.borderColor = 'red';
    nimiSisalto.style.color = 'black';
    nimiSisalto.value = 'Täytä tämäkin kohta *PAKOLLINEN*';
    setTimeout(() => nimiSisalto.classList.remove('nimiSisalto'), 3000);
    setTimeout(() => nimiSisalto.value = ' ', 3000);
    setTimeout(() => nimiSisalto.style.borderColor = 'rgb(255, 255, 255)', 3000);

    sukunSisalto.style.borderColor = 'red';
    sukunSisalto.style.color = 'black';
    sukunSisalto.value = 'Täytä tämäkin kohta *PAKOLLINEN*';
    setTimeout(() => sukunSisalto.classList.remove('nimiSisalto'), 3000);
    setTimeout(() => sukunSisalto.value = ' ', 3000);
    setTimeout(() => sukunSisalto.style.borderColor = 'rgb(255, 255, 255)', 3000);

    sahkoSisalto.style.borderColor = 'red';
    sahkoSisalto.style.color = 'black';
    sahkoSisalto.value = 'Täytä tämäkin kohta *PAKOLLINEN*';
    setTimeout(() => sahkoSisalto.classList.remove('sahkoSisalto'), 3000)
    setTimeout(() => sahkoSisalto.value = ' ', 3000);
    setTimeout(() => sahkoSisalto.style.borderColor = 'rgb(255, 255, 255)', 3000);
  }
});
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {

    var status = xhr.status;

    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };


  xhr.send();
};

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function (err, data) {

  if (err != null) {
    console.error(err);
  } else {
    console.log(`${data.infected}`);
    console.log(`${data.tested}`);
    console.log(`${data.deaths}`);
    console.log(`${data.country}`);
    console.log(`${data.lastUpdatedAtApify}`);
  }
});


const emailnappi = document.querySelector('.nappula');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON() {
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('valmis, yhteys toimii');
    }
  };

  const nimi = document.querySelector('#nimi').value;
  const email = document.querySelector('#sahkoposti').value;

  var data = JSON.stringify({
    "EmailMsg": email, 
    "EmailTo": "janne.jantti", 
    "EmailName": nimi 
  });
  xhr.send(data);
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
});