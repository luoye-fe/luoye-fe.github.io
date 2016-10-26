// meta缩放
var clientW = document.body.clientWidth;
var percent = clientW / 320;
document.getElementById('viewPort').setAttribute('content', 'width=320, initial-scale=' + percent + ', maximum-scale=' + percent + ', user-scalable=no');

$('.tab li').on('click', function(){
	var index = $(this).index();
	$('.tab li').removeClass('active');
	$(this).addClass('active');
	$('.column-item').css({
		display: 'none'
	})
	$('.column-item').eq(index).css({
		display: 'block'
	})
})

$('.fotter').on('click', function(){
	$('body').scrollTop(0);
})