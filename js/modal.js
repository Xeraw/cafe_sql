// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnYes = document.getElementById("myBtnYes");
var btnNo = document.getElementById("myBtnNo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

function isAccepted() {
    let vari = getCookie("charte")
    if (vari == "accepted") {
        return true
    }
    return false
}

if (!isAccepted()) {
    modal.style.display = "block";
}
btnYes.onclick = function() {
    document.cookie ="charte=accepted"
    modal.style.display = "none";
}
btnNo.onclick = function() {
    document.cookie ="charte=nope"
    modal.style.display = "none";
}