document.getElementById("reservation_cookie").onclick = send_reservation;

//===================envoie dans les cookies la réservation============================
// let index = 0;
// function send_reservation() {
//   let tableau = [];
//   let name = document.getElementById("name").value;
//   let nb_people = document.getElementById("nb_people").value;
//   let date_birth = document.getElementById("date_birth").value;
//   let message = document.getElementById("message").value;

//     tableau.push(name, nb_people, date_birth, message);
//     index++;
//     document.cookie = `reservation${index}=${tableau}`;
//     console.log(document.cookie);

// }

function send_reservation() {
  let name = document.getElementById("name").ariaValueMax;
  let nb_people = document.getElementById("nb_people").value;
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let message = document.getElementById("message");
  let reservation = [name, nb_people, date, time, message];

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("reservation_done").innerHTML = this.responseText;
    console.log("envoie réussi");
  };
  xhttp.open("GET", "php/setreservation.php?q=" + reservation);
  xhttp.send();
}

function show_reservation() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("show_reservation").innerHTML = this.responseText;
    document.getElementById("show_reservation").style.marginLeft = "32%";
    document.getElementById("show_reservation").style.marginTop = "0.5%";
    document.getElementById("show_reservation").style.marginBottom = "0.5%";
  };
  xhttp.open("GET", "php/showreservation.php");
  xhttp.send();
}

function show_disponibility() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("show_disponibility").innerHTML = this.responseText;
    document.getElementById("show_disponibility").style.marginLeft = "36%";
    document.getElementById("show_disponibility").style.marginTop = "0.5%";
    document.getElementById("show_disponibility").style.marginBottom = "0.5%";
  };
  xhttp.open("GET", "php/exo_showreserv.php");
  xhttp.send();
}
