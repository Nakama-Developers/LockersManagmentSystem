// Determine the number of sections needed.

var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:64924/php/LockersData.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    var obj = JSON.parse(xhr.response);
                } else {
                }
            }
        }
        xhr.send();
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