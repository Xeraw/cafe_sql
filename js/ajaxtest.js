function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML = this.responseText;
      }
    xhttp.open("GET", "js/ajax_info.txt", true);
    xhttp.send();
}