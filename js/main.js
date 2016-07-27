//To make the accordion work, it adds the class "show" when the h2 heading is clicked

var accordion = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    };
}
