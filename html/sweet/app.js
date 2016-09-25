var countdown;

var init = function(){
	
	countdown = CountDown.init({
		startTime: '2016/09/15 01:00',
		unit: {
			day: true,
			hour: true,
			minute: true,
			second: true
		}
	});

	countdown.change = function(value){
		console.log(value);
		document.querySelectorAll('.timer')[0].innerHTML = (value.day ? value.day + '天' : '') + (value.hour ? value.hour + '时' : '') +(value.minute ? value.minute + '分' : '') +(value.second ? value.second + '秒' : '');
	}

}

init();
