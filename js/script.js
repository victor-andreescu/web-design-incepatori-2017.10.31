// console.log( $('.jsMore') );

$('.jsMore').on('click', function(event){
    event.preventDefault();

    $('.jsOverlay').addClass('is-visible');
});


$('.jsModalClose').on('click', function(event){
    event.preventDefault();

    $('.jsOverlay').removeClass('is-visible');
});



$('.jsShowDropdown').on('click', function(event){
    event.preventDefault();

    $('.jsDropdown').toggleClass('is-visible');
});
