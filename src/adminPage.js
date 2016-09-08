window.onload = function () {

    var isPanelOpen = false;
    var controlPanel = document.getElementById("controlPanel");
    var noPanelContent = document.getElementById("noPanelContent");
    var panelButton = document.getElementById("panelButton");

    panelButton.addEventListener("click", function () {
        if (!isPanelOpen) {
            controlPanel.className += " openPanel";
            noPanelContent.style.width = "80%";
            noPanelContent.style.transition = "width .5s"
            panelButton.className += " pressedButton";
            panelButton.textContent = "Remove Panel"
            isPanelOpen = true;
        }
        else {
            noPanelContent.style.removeProperty("width");
            noPanelContent.style.removeProperty("transition");
            noPanelContent.style.transition = "0.5s";
            controlPanel.className = "controlPanel";
            panelButton.className = "panelButton";
            panelButton.textContent = "Control Panel";
            isPanelOpen = false;
        }
    });
}