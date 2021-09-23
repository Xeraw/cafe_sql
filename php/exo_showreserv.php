<?php
$mysqli = new mysqli("db", "root", "root", "exo_cafe");
// Check connection
// if ($mysqli->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

$sql = "SELECT date, heure, SUM(`nombre_personnes`) AS nombre_total_personnes FROM reservation GROUP BY date, heure";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "<table>";
  echo "<tr>";
  echo "<th>Date</th>";
  echo "<th>Heure</th>";  
  echo "<th>Nombre total de personnes</th>";
  echo "</tr>";
  echo "</table>";
  while($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row["date"] . "</td>";
    echo "<td>" . $row["heure"] . "</td>";
    echo "<td>" . $row["nombre_total_personnes"] . "</td>";
    echo "</tr>";
  }
} else {
  echo "0 results";
}
?>