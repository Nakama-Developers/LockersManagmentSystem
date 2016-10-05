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
        lockers[i] = new locker(i, null, 'available');
    }
}
/* End Demo */

window.onload = function () {
    // When saving the owner info values
    var form = document.getElementById('ownerInfoForm');
    form.addEventListener('submit', function (e) {
        // Collecting data from the form
        var data = getFormValues(form);
        // Overriding the submit button behavior.
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:64924/php/dataSubmit.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    alert('Success!!!!!!');
                } else {
                    alert(xhr.responseText);
                }
            }
        }
        // You must call setRequestHeader()after open(), but before send().
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    });

    function getFormValues(form) {
        var data = [];
        for (var i = 0, length = form.elements.length; i < length; i++) {
            var name = encodeURIComponent(form.elements[i].name);
            var value = encodeURIComponent(form.elements[i].value);
            data.push(name + '=' + value);
        }
        var comment = document.getElementById('comment');
        data.push(encodeURIComponent(comment.name) + '=' + encodeURIComponent(comment.value));
        return data.join('&');
    };
};