!function(window,document,$,undefined){
	$navBar = $('#navBar');
	$navBar.find('.main i').on('mouseover',function(){
		var $this = $(this),
			$target = $this.siblings('span'),
			width = $target.width();
		$this.siblings('span').animate({'left':-width+'px'},'200px');
	}).on('mouseout',function(){
		var $this = $(this);
			
		$this.siblings().animate({'left':'0px'},'200px')
	})
	
	$navBar.find('.main2 i').on('mouseover',function(){
		var $this = $(this),
			$target = $this.siblings('span'),
			width = $target.width();
		$this.siblings('span').animate({'left':-width+'px'},'200');
	}).on('mouseout',function(){
		var $this = $(this);
			
		$this.siblings().animate({'left':'0px'},'200')
	});
	
	$navBar.find('.main2 img').on('mouseover',function(){
		var $this = $(this),
		$this.animate('left':'-160px','200')		
	})
	
}
(window,document,jQuery);
