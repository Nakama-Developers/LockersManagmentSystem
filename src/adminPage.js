window.onload = function () {
    document.getElementById("panelButton").addEventListener("click", function () {
        document.getElementById("controlPanel").style.width = "20%";
        document.getElementById("controlPanel").style.float = "left";
        document.getElementById("mainContent").style.float = "right";
        document.getElementById("mainContent").style.width = "60%";
    });
}