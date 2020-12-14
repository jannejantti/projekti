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
getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function (err, data) {
  let taulukko = `<table width="80%" style="border:4px solid blue">`
  const tartunnat = data.map(function (paiva) {

    if (paiva.confirmedCases != undefined && paiva.lastUpdatedAtApify != undefined) {
      taulukko = taulukko + `<tr><td><b>Päivä ja aika</b></td><td>${paiva.lastUpdatedAtApify.split('T')[0]}</td></tr> <tr><td>Varmistetut</td><td>${paiva.confirmedCases}</td></tr>`;
    }

    else if (paiva.testedCases != undefined && paiva.lastUpdatedAtApify != undefined) {
      taulukko = taulukko + `<tr><td><b>Päivä ja aika</b></td><td>${paiva.lastUpdatedAtApify.split('T')[0]}<tr><td>Testatut</td><td>${paiva.testedCases}</td></tr>`;
    }

    else if (paiva.infected != undefined && paiva.lastUpdatedAtApify != undefined) {
      taulukko = taulukko + `<tr><td><b>Päivä ja aika</b></td><td>${paiva.lastUpdatedAtApify.split('T')[0]}<tr><td>Tartunnat</td><td>${paiva.infected}</td></tr>`;
    }
    else {
      if(paiva.lastUpdatedAtApify != undefined){
        
      
      taulukko = taulukko + `<tr><td><b>Päivä ja aika</b></td><td>${paiva.lastUpdatedAtApify.split('T')[0]}<tr><td>Ei ole</td><td>Ei ole</td></tr>`
    }}
  });
  taulukko = taulukko + `</table>`
  document.body.innerHTML = taulukko;
});
  document.body.style.background="lightblue";
