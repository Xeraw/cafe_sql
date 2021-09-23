function showCustomer(str) {
    if (str == "") {
      document.getElementById("txtHint2").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("txtHint2").innerHTML = this.responseText;
    }
    xhttp.open("GET", "php/getcustomer.php?q="+str);
    xhttp.send();
  }