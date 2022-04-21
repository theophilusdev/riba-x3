$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var $tog = $(".toggle-icon");
        var $togx = $(".toggle-iconx");
        var valueTop = $nav.height() + 14;
        $nav.toggleClass("navbarbgg", $(this).scrollTop() > $nav.height());
        $tog.toggleClass("black", $(this).scrollTop() > $nav.height());
        $togx.toggleClass("bt-blue", $(this).scrollTop() > $nav.height());
        $(".fixed-sticky").css("top", valueTop);
    });




    var thumbnailsSplide = new Splide('#dev1', {
        rewind: true,
        fixedWidth: 300,
        fixedHeight: 180,
        isNavigation: true,
        gap: 10,
        focus: 'center',
        pagination: false,
        cover: true,
        breakpoints: {
            '600': {
                fixedWidth: 120,
                fixedHeight: 70,
                gap: 5,
            }
        }
    }).mount();

    // Create the main slider.
    var primarySplide = new Splide('#dev2', {
        type: 'fade',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
    });

    // Set the thumbnails slider as a sync target and then call mount.
    primarySplide.sync(thumbnailsSplide).mount();
});

document.addEventListener("DOMContentLoaded", function (event) {
    AOS.init();
});


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })