$( document ).ready(function() {
    var hovered = false;
    $('#name-link').mouseenter(function() { console.log('entered')})
    console.log($(window).width())
    console.log($(window).height())
    // $('#name-link').each(function () {
    //     var hovered = false;
    //     var loop = window.setInterval(function () {
    //     if (hovered) {
    //         $('.photo-overlay').addClass('appear');

    //     } else {
    //         $('.photo-overlay').removeClass('appear');
    //     }
    //     }, 250);

    //     $(this).hover(
    //         function () {
    //             hovered = true;
    //         },
    //         function () {
    //             hovered = false;
    //         }
    //     );
    // });
    // $('#name-link').hover(function() { hovered = true }, function() { hovered = false });
    // if (hovered == true) {
    //     console.log(hovered)
    //     $('.photo-overlay').addClass('appear');
    // }

    $('#name-link').mousemove(function( event ) {
        var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
        var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
        console.log( "( event.pageX, event.pageY ) : " + pageCoords );
        console.log( "( event.clientX, event.clientY ) : " + clientCoords );
    });
});

$(window).on('resize', function(){
    var docSize = $( window ).width();
    console.log(docSize)
});