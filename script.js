document.querySelector('.btn-dark').addEventListener('click', function() {
    alert('Form submitted!');
});


document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('#schoolCarousel');
    carousel.addEventListener('slide.bs.carousel', function () {
        console.log('Carousel slide event triggered');
    });
});

