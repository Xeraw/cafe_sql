function loadCatalogue() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "../artiste.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table="<tr><th>Artist</th><th>Title</th><th>Year</th><th>Price</th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("ajax_catalogue").innerHTML = table;
  }