// meta缩放
var clientW = document.body.clientWidth;
var percent = clientW / 320;
document.getElementById('viewPort').setAttribute('content', 'width=320, initial-scale=' + percent + ', maximum-scale=' + percent + ', user-scalable=no');

var tab1Index = 0;

$('.tab1 li').on('click', function(){
	tab1Index = $(this).index();
	$('.tab1 li').removeClass('active');
	$(this).addClass('active');
	$('.column-con').css({
		display: 'none'
	})
	$('.tab2').css({
		display: 'none'
	})
	$('.column-con').eq(tab1Index).css({
		display: 'block'
	})

	$('.tab2').eq(tab1Index).css({
		display: 'block'
	})
})

$('.tab2 li').on('click', function() {
	var index = $(this).index();
	$('.tab2').eq(tab1Index).find('li').removeClass('active');
	$(this).addClass('active');
	$('.column-con').eq(tab1Index).find('.column-item').css({
		display: 'none'
	})
	$('.column-con').eq(tab1Index).find('.column-item').eq(index).css({
		display: 'block'
	})
})

$('.fotter').on('click', function(){
	$('body').scrollTop(0);
})