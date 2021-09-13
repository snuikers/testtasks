$('.navbar-mob__btn').on('click', function(e) {
	e.preventDefault;
	$('.navbar-mob').toggleClass('navbar-mob__btn-active');
  $('body').toggleClass('scroll-off');
}) 