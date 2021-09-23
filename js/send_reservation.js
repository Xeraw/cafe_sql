document.getElementById("reservation_cookie").onclick = send_reservation;

let index = 0;
function send_reservation() {
  let tableau = [];
  let name = document.getElementById("name").value;
  let nb_people = document.getElementById("nb_people").value;
  let date_birth = document.getElementById("date_birth").value;
  let message = document.getElementById("message").value;

    tableau.push(name, nb_people, date_birth, message);
    index++;
    document.cookie = `reservation${index}=${tableau}`;
    console.log(document.cookie);

}