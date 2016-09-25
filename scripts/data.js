// # lockers Per Page 
var numVisiblelockers = 50;
var displayedNavLinks = 6;

// locker object
function locker(id, comment, status){
    this.id = id;
    this.comment = comment;
    this.status = status;
}

var lockers = [];

// TODO: connecting to DB and loading Data.

/*    Demo  */
var lockerNum = 555;
for (var i = 0; i < lockerNum; i++) {
    if (i % 2 == 0) {
        lockers[i] = new locker(i, 'blabla', 'reserved');
    } else {
        lockers[i] = new locker(i, 'blabla', 'maintenance');
    }
    if (i % 10 == 0) {
        lockers[i] = new locker(i);
    }
}
/* End Demo */

window.onload = function () {
    // Determine the number of sections needed.
    var article = document.getElementsByTagName('article')[0];
    var numLockers = lockers.length;
    var numSections = numLockers / numVisiblelockers;
    if (numLockers % numVisiblelockers != 0) {
        numSections++;
    }
    for (var i = 1; i <= numSections; i++) {
        article.innerHTML += '</section><section id="section' + i + '" class="visibleLockers"><h1 style="display: none">Visible Lockers</h1>';
    }

    // Printing Nav tags.
    var links = '</section><footer id="mainContentFooter"><nav id="navLinks"><a class="navLink" id="postPrev">&#8249&#8249</a><a class="navLink" id="prev">&#8249</a>';
    for (var i = 1; i <= numSections; i++) {
        if (i <= displayedNavLinks) {
            links += '<a class="navLink" id="navLink' + i + '">' + i + '</a>';
        } else {
            links += '<a class="navLink" id="navLink' + i + '" style="display: none">' + i + '</a>';
        }
    }
    links += '<a class="navLink" id="next">&#8250</a><a class="navLink" id="postNext">&#8250&#8250</a></nav></footer>';
    article.innerHTML += links;

    /*****************
    * Print lockers * NOTE: there is many ways to implement this with minor differences, this is - I think - the most readable one though.
    *****************/
    var numPrintedLockers = 0;
    for (var i = 1; i <= numSections; i++) {
        var section = document.getElementById('section' + i);
        for (var j = 0; j < numVisiblelockers; j++) {
            var currentLocker = lockers[numPrintedLockers];
            numPrintedLockers++;
            if (currentLocker.comment != null) {
                section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus ' + currentLocker.status + '"></div>' +
                    '<div class="commented"></div><div class="lockerHand"></div></a>';
            }
            else {
                section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus ' + currentLocker.status + '"></div><div class="lockerHand"></div></a>';
            }
            if (numPrintedLockers === numLockers) {
                break;
            }
        }
    }

    document.getElementById('section1').style.display = 'block';
    var displayedSection = 1;
    var selectedLink = 2;

    /* Navigation links functions */
    var navLinks = document.getElementsByClassName('navLink');
    var limit = navLinks.length - 2;
    for (var i = 2; i < limit; i++) {
        (function (i) {
            navLinks[i].addEventListener("click", function () {
                navLinks[i].className += ' selected';
                navLinks[selectedLink].className = 'navLink';
                selectedLink = i;
                if (navLinks[selectedLink].nextSibling.style.display === 'none') {
                    slideLinksForward();
                } else if (navLinks[selectedLink].previousSibling.style.display === 'none') {
                    slideLinksBackward();
                }
                document.getElementById('section' + displayedSection).style.display = "none";
                document.getElementById('section' + (i - 1)).style.display = "block";
                displayedSection = i - 1;
            });
        })(i);
    }

    // Post Previous link.
    document.getElementById('postPrev').addEventListener('click', function () {
        document.getElementById('prev').click();
        document.getElementById('prev').click();
    });

    // Previous link.
    document.getElementById('prev').addEventListener('click', function () {
        navLinks[selectedLink].previousSibling.click();
    });

    // Next Link.
    document.getElementById('next').addEventListener('click', function () {
        navLinks[selectedLink].nextSibling.click();
    });

    // Post Next Link.
    document.getElementById('postNext').addEventListener('click', function () {
        document.getElementById('next').click();
        document.getElementById('next').click();
    });

    function slideLinksForward() {
        navLinks[selectedLink + 1].style.display = 'inline-block';
        navLinks[selectedLink - 5].style.display = 'none';
    }

    function slideLinksBackward() {
        navLinks[selectedLink - 1].style.display = 'inline-block';
        navLinks[selectedLink + 5].style.display = 'none';
    }


    // popup JAVASCRIPT

    // Get the modal
    var modal = document.getElementById('myModal');

    // When the user clicks on a locker, open the modal
    var allLockers = document.getElementsByClassName('locker');
    var defaultComment = 'No Comment';

    for (var i = 0; i < allLockers.length; i++) {
        (function (i) {
            allLockers[i].addEventListener('click', function () {
                modal.style.display = "block";
                var id = allLockers[i].getElementsByTagName('span')[0].textContent;
                document.getElementById('lockerID').textContent = id;
                var lockerStatus = lockers[id - 1].status;
                var prevLockerState = document.getElementById('currentStatus').getElementsByTagName('span')[0].textContent;
                if (lockerStatus != null) {
                    document.getElementById('currentStatus').className = 'statusOptions ' + lockerStatus + 'Status';
                    document.getElementById('currentStatus').getElementsByTagName('span')[0].textContent = lockerStatus;
                    document.getElementsByClassName(lockerStatus + 'Option')[0].textContent = prevLockerState;
                    document.getElementsByClassName(lockerStatus + 'Option')[0].className = 'statusOptions ' + prevLockerState + 'Option';
                } else {
                    if (prevLockerState != 'available') {
                        document.getElementById('currentStatus').className = 'statusOptions availableStatus';
                        document.getElementById('currentStatus').getElementsByTagName('span')[0].textContent = 'available';
                        document.getElementsByClassName('availableOption')[0].textContent = prevLockerState;
                        document.getElementsByClassName('availableOption')[0].className = 'statusOptions ' + prevLockerState + 'Option';
                    }
                }
                if (lockers[id - 1].comment != null) {
                    document.getElementById('comment').textContent = lockers[id - 1].comment;
                } else {
                    document.getElementById('comment').textContent = defaultComment;
                }
            });
        })(i);
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
}