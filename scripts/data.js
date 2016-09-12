// # lockers Per Page 
var numVisiblelockers = 50;

// locker object
function locker(id, comment, status){
    this.id = id;
    this.comment = comment;
    this.status = status;
}

var lockers = [];

// TODO: connecting to DB and loading Data.

/*    Demo  */
var lockerNum = 233;
for (var i = 0; i < lockerNum; i++) {
    if (i % 2 == 0) {
        lockers[i] = new locker(i, 'blabla', 'reserved');
    } else {
        lockers[i] = new locker(i, 'blabla', 'maintainance');
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
    var links = '</section><footer id="mainContentFooter"><nav id="navLinks"><a class="navLink" id="postPrev" href="#">&#8249&#8249</a><a class="navLink" id="prev" href="#">&#8249</a>';
    for (var i = 1; i <= numSections; i++) {
        links += '<a class="navLink" href="#">' + i + '</a>';
    }
    links += '<a class="navLink" id="next" href="#">&#8250</a><a class="navLink" id="postNext">&#8250&#8250</a></nav></footer>';
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
            if (currentLocker.status === 'reserved') {
                if (currentLocker.comment !== null) {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus reserved"></div>' +
                    '<div class="commented"></div><div class="lockerHand"></div></a>';
                }
                else {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus reserved"></div><div class="lockerHand"></div></a>';
                }
            } else if (currentLocker.status === 'maintainance') {
                if (currentLocker.comment != null) {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus maintainance"></div>' +
                    '<div class="commented"></div><div class="lockerHand"></div></a>';
                }
                else {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus maintainance"></div><div class="lockerHand"></div></a>';
                }
            }
            else {
                if (currentLocker.comment != null) {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus"></div>' +
                    '<div class="commented"></div><div class="lockerHand"></div></a>';
                }
                else {
                    section.innerHTML +=
                    '<a class="locker" id="locker' + numPrintedLockers + '" ><span>' + numPrintedLockers + '</span><div class="lockerStatus"></div><div class="lockerHand"></div></a>';
                }
            }
            if (numPrintedLockers === numLockers) {
                break;
            }
        }
    }
    
    document.getElementById('section1').style.display = 'block';
    var displayedSection = 1;

    /* Navigation links functions */
    var navLinks = document.getElementsByClassName('navLink');
    var limit = navLinks.length - 2;
    for (var i = 2; i < limit; i++) {
        (function (i) {
            navLinks[i].addEventListener("click", function () {
                document.getElementById('section' + displayedSection).style.display = "none";
                document.getElementById('section' + (i - 1)).style.display = "block";
                displayedSection = i - 1;
            });
        })(i);
    }
}