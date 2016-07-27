//To make the accordion work, it adds the class "show" when the h2 heading is clicked

var accordion = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    };
}

//jQuery plugin code for Simple Text Rotator
$(document).ready(function () {
    $('.rotate').textrotator({
        animation: 'fade',
        separator: ',',
        speed: 1500
    });
});
