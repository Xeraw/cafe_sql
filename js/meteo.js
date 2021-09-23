function getmeteo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("meteo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "php/meteo.php");
    xhttp.send();
  }
  getmeteo();