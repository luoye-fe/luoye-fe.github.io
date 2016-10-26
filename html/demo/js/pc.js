$('.fotter').on('click', function(){
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