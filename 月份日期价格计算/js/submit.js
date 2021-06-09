

!function(window,document,$,undefined){
	'use script'
	var $btn = $('.add'),
		$month = $('#month'),
		month = $month.html()*1,
		$money = $('#money'),
		money = 360,
		$start = $('#start'),
		startTodayStr,
		$stop = $('#stop');
		
		startTodayStr = getToday();
		
		$stop.html(getStopDay(startTodayStr));
		$start.html(startTodayStr);
	$btn.on('click',function(){
		var $this = $(this);
			if($this.attr('id') =='add'){
				month++;
			}else{
				if(month>1){
					month--;
				}else{
					month;
				}
			}			
		$month.html(month);		
		$money.html(month*money);
		$stop.html(getStopDay(startTodayStr,month))
	});
	
	function getToday(){
		var date = new Date();
		
		return date.getFullYear() + "-" + fill0((date.getMonth()+1)) +"-" + fill0(date.getDate()) ;
	}
	
	function getStopDay(start,month){
		month = month||1;
		var date = new Date();
		date.setDate(date.getDate()+30*month);
	
		return date.getFullYear() + "-" + fill0((date.getMonth()+1)) +"-" + fill0(date.getDate()) ;
	}
	
	function fill0(num){
		return num<10?'0'+num:num
	}
	
	
	
}	
(window,document,jQuery);