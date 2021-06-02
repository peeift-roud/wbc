
!function(window,document,$,undefined){
	
	"use script"
	var $add = $('.add'),
		$month = $('#month'),
		month = $month.html(),
		$money = $('.money'),
		money = 360,
		$start =$('#start'),
		$stop = $('#stop');
	
	$add.on('click',function(){
		$this = $(this);
		if($this.attr('id') == 'add'){
			month++;
			
		}else{
			if(month<2){
				month;
			}else{
				month --
			}
		}	
		$month.html(month);
		$money.html(month*money)
		$stop.html();
	});
	function today(){
		
		var date = new Date;
		var yea = date.getFullYear(),
			mon = date.getMonth();
			day = date.getDate(); 
		 $start.html(yea + "-" + fill0((mon+1)) + '-' + fill0(day) );
	}
	today();
	
	/*function stopDay(stopDay,num){
		var date = new Date,
			date.setDate();
	}*/
	
	stopDay();
	
	
	
	function fill0(num){
		return num<10? '0'+ num:num;
	};
	
	
	
	
		
	
	
	
	
}(window,document,jQuery)
