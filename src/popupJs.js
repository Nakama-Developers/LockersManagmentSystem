window.onload = function(){
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var editButton = document.getElementById("editButton");

    var name = document.getElementById("name");
    var ID = document.getElementById("ID");
    var Email = document.getElementById("e-mail");
    var number = document.getElementById("mobileNumber");
    var comment = document.getElementById("comments");

    editButton.onclick = function () {
        name.removeAttribute("Readonly");
        ID.removeAttribute("Readonly");
        Email.removeAttribute("Readonly");
        number.removeAttribute("Readonly");
        comment.removeAttribute("Readonly");
        editButton.innerHTML = "Save"; 
    }
}