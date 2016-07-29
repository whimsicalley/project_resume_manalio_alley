$(document).ready(function () {

    //To make the accordion work, this code adds the class "show" when the h3 headings are clicked
    var accordion = $('.accordion');
    var i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        };
    }

    //jQuery plugin code for Simple Text Rotator
    $('.rotate').textrotator({
        animation: 'fade',
        separator: ',',
        speed: 1500
    });

    //jQuery plugin code for backstretch
    $.backstretch('img/mountain-bg.jpeg');

    //Custom jQuery: when you click on "Let's be friends" header in contacts section, a paragraph tag appears.

    var friends = $('.friends');
    friends.on('click', function () {
        friends.after('<p>Thank you for stopping by!');
    });

});
