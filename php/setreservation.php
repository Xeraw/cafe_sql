<?php
$mysqli = new mysqli("db", "root", "root", "exo_cafe");
// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$tableau = explode(",", $_GET['q']);

$nom = $tableau[0];
$nb = $tableau[1];
$date = $tableau[2];
$heure = $tableau[3];
$message = $tableau[4];

$heureConc = strval(strstr($tableau[3],':', true)).":%";

$stmt = $mysqli->prepare('SELECT SUM(`nombre_personnes`) AS nombre_total_personnes FROM reservation WHERE (date = ? AND heure LIKE ?) GROUP BY date');

$stmt->bind_Param("ss", $date, $heureConc);

$stmt->execute();
$stmt->bind_result($nombre_total_personnes);
$stmt->fetch();
$stmt->close();

$pluriel = "";
if ($nb > 1) {$pluriel = "s";}

if (($nombre_total_personnes + $nb) < 50) {
    
  $stmt = $mysqli->prepare('INSERT INTO reservation (nom, nombre_personnes, date, heure, message) VALUES (?,?,?,?,?)');
  $stmt->bind_Param("sisss",$nom, $nb, $date, $heure, $message);
  $stmt -> execute();
  $stmt -> close();

  echo "Vous avez réserver une table au nom de ".$nom." pour ".$nb." personne".$pluriel.", le ".$date." à ".$heure;

} else {
  echo "Malheusement, nous n'avons plus de place pour vous accueillir le ".$date." à ".$heure;
}

?>