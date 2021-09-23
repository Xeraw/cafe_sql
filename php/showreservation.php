<?php
$mysqli = new mysqli("db", "root", "root", "exo_cafe");
// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT nom, nombre_personnes, date, heure, message FROM reservation";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "<table>";
  echo "<tr>";
  echo "<th>Nom</th>";
  echo "<th>Nombres de personnes</th>";
  echo "<th>Date</th>";
  echo "<th>Heure</th>";
  echo "<th>Message</th>";
  echo "</tr>";
  echo "</table>";
  while($row = $result->fetch_assoc()) {
echo "<tr>";
echo "<td>" . $row["nom"] . "</td>";
echo "<td>" . $row["nombre_personnes"] . "</td>";
echo "<td>" . $row["date"] . "</td>";
echo "<td>" . $row["heure"] . "</td>";
echo "<td>" . $row["message"] . "</td>";
echo "</tr>";
  }
} else {
  echo "0 results";
}
?>