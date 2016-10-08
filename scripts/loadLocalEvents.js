/* openning and closing panel */
var isPanelOpen = false;
var controlPanel = document.getElementById("controlPanel");
var noPanelContent = document.getElementById("noPanelContent");
var panelButton = document.getElementById("panelButton");

panelButton.addEventListener("click", function () {
    if (!isPanelOpen) {
        controlPanel.className += " openPanel";
        noPanelContent.style.width = "80%";
        noPanelContent.style.transition = "width .5s";
        panelButton.className += " pressedButton";
        panelButton.textContent = "Close Panel"
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

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on a locker, open the modal
var allLockers = document.getElementsByClassName('locker');
var defaultComment = 'No Comment';

for (var i = 0; i < allLockers.length; i++) {
    (function (i) {
        allLockers[i].addEventListener('click', function () {
            var id = allLockers[i].getElementsByTagName('span')[0].textContent;
            //alert(id);
            document.getElementById('lockerID').textContent = id;
            document.getElementById('lockerIdValue').value = id;
            var currentStatusElement = document.getElementById('currentStatus');
            //------------------- This variables are used to alter between menu values --------------------------------\\
            var lockerStatus = findlocker(id)[1];
            var lockerComment = findlocker(id)[0];
            var prevLockerStatus = currentStatusElement.getElementsByTagName('span')[0].textContent;

            //------------------- Alterring between the previous status value and the clicked one ---------------------\\
            currentStatusElement.className = 'statusOptions ' + lockerStatus + 'Status';
            document.getElementById('statusBtn').value = lockerStatus;
            currentStatusElement.getElementsByTagName('span')[0].textContent = lockerStatus;
            if (prevLockerStatus !== lockerStatus) {
                document.getElementsByClassName(lockerStatus + 'Option')[0].textContent = prevLockerStatus;
                document.getElementsByClassName(lockerStatus + 'Option')[0].className = 'statusOptions ' + prevLockerStatus + 'Option';
            }
            if (lockerComment !== null) {
                document.getElementById('comment').textContent = lockerComment;
            } else {
                document.getElementById('comment').textContent = defaultComment;
            }
            modal.style.display = "block";
        });
    })(i);
}

function findlocker(idVal){
    for (var i = numLockers - 1; i >= 0; i--){
        if(lockers[i].id == idVal){
            return [lockers[i].comment, lockers[i].status + ''];
        }
    }
    return ['error: this locker does not exist!.'];
}

var inputs = document.getElementById('inputs').getElementsByTagName('input');
var editBtn = document.getElementsByClassName('editBtn')[0];
var saveBtn = document.getElementsByClassName('saveBtn')[0];
var commentSection = document.getElementById('comment');
var isEditMode = false;

editBtn.addEventListener('click', function () {
    editBtn.style.display = 'none';
    saveBtn.style.display = 'block';
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("Readonly");
    }
    commentSection.removeAttribute("Readonly");
    if (commentSection.textContent == defaultComment) {
        commentSection.textContent = '';
    }
});

saveBtn.addEventListener('submit', function () {
    removeEditMode();
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    removeEditMode();
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        removeEditMode();
        modal.style.display = "none";
    }
}

function removeEditMode() {
    saveBtn.style.display = 'none';
    editBtn.style.display = 'block';
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("Readonly", "Readonly");
    }
    commentSection.setAttribute("Readonly", "Readonly");
    if (commentSection.textContent == '') {
        commentSection.textContent = defaultComment;
    }
}