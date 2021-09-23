function openMenu(event, menuName) {
  let i, tab, tabMenus;
  // Hide the menu
  tab = document.getElementsByClassName("menu");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }
  tabMenus = document.getElementsByClassName("tabMenu");
  // Remove the darkgrey attribut
  for (i = 0; i < tab.length; i++) {
    tabMenus[i].className = tabMenus[i].className.replace(" dark-grey", "");
  }
  // Add the darkgrey color to the selected menu
  document.getElementById(menuName).style.display = "block";
  event.currentTarget.firstElementChild.className += " dark-grey";
}

document.getElementById("menuCoffee").click();
// document.getElementById("countConsole").onclick = incrementButton;
// document.getElementById("countConsole").onclick = afficherValueForm;

// let clickCount = 0;
// function incrementButton() {
//   clickCount++;
//   console.log(
//     `Vous avez appuyé sur le bouton "SEND MESSAGE" : ${clickCount} fois`
//   );
// }

// let tableauMemory = []
// function afficherValueForm() {
//   let index, tableau
//   tableau = document.getElementsByClassName("form");
//   for (index = 0; index < tableau.length; index++) {
//     if (tableau[index].value) {
//       tableauMemory.push(tableau[index].value);
//     }
//   }
//   console.log(tableauMemory);
// }

// document.getElementById("countConsole").onclick = birthDate;
function birthDate() {
  let name = document.getElementById("name").value;
  let birth_date = document.getElementById("date_birth").value;
  let today = new Date();
  let birthday = new Date(birth_date);
  let diff = dateDiff(birthday, today);
  let result = `La personne est née : il y a ${diff.year} années, ${diff.day} jours, ${diff.hour} heures, ${diff.min} minutes et ${diff.sec} secondes`;
  if (diff.year < 13) {
    alert(
      `FBI: ${name} tu n'as que ${diff.year} ans, reviens quand tu auras du poil au menton !`
    );
    return;
  }
  console.log(result);
}

function dateDiff(date1, date2) {
  var diff = {}; // Initialisation du retour
  var tmp = date2 - date1;

  tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
  diff.sec = tmp % 60; // Extraction du nombre de secondes

  tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
  diff.min = tmp % 60; // Extraction du nombre de minutes

  tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
  diff.hour = tmp % 24; // Extraction du nombre d'heures

  tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
  diff.day = tmp % 365.25;

  tmp = Math.floor((tmp - diff.day) / 365.25); // Nombre d'année
  diff.year = tmp;
  return diff;
}

let isDefuse = false;
let timer = 10000;

setInterval(myTimer, 1000);

function myTimer() {
  if (!isDefuse) {
    if (timer > 0) {
      timer--;
      document.getElementById(
        "timer"
      ).innerHTML = `Rose a caché une bombe, il te reste ${timer}s afin de trouver comment la désamorcer...`;
    }
  }
  if (timer === 0 && !isDefuse) {
    alert("Tu es mauvais Jack, Rose t'a détruit...");
    isDefuse = true;
    document.getElementById(
      "timer"
    ).innerHTML = `C'est la piquette Jack ! Tu sais pas jouer Jack ! T'es mauvais !`;
    clearInterval(myTimer);
  }
}

document.getElementById("defuse").onclick = defuseBomb;
function defuseBomb() {
  clearInterval(myTimer);
  isDefuse = true;
  alert("Tu as réussi à désamorcer la bombe. Félicitations !");
  let time = 120 - timer;
  document.getElementById(
    "timer"
  ).innerHTML = `Tu as réussi à désarmorcer la bombe en  ${time} s, demande à Rose de te tenir la jambe !`;
}
