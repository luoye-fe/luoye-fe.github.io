$('.fotter').on('click', function(){
	$('body').scrollTop(0);
})
$('.side-bottom').on('click', function(){
	$('body').scrollTop(0);
})


$('.tab li').on('click', function() {
	var index = $(this).index();
	var parentIndex = $(this).parent().attr('index');
	$('.tab').eq(parentIndex).find('li').removeClass('active');
	$(this).addClass('active');
	$('.column').eq(parentIndex).find('.column-item').css({
		display: 'none'
	})
	$('.column').eq(parentIndex).find('.column-item').eq(index).css({
		display: 'block'
	})
})

$('.tap-main').on('click', function() {
	var index = $(this).parent().index();
	$('.tap-main').removeClass('active');
	$(this).addClass('active');
	$('.tap-ul').css({
		display: 'none'
	})
	$('.tap-ul').eq(index).css({
		display: 'block'
	})
})

$('.tap-ul li').on('click', function(){
	var index = $(this).index();
	var parIndex = $(this).parent().parent().index();
	$('.tab').eq(parIndex).find('li').eq(index).trigger('click');
})