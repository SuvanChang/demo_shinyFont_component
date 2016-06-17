(function(){
	$(function(){
		$('head').append('<link rel="stylesheet" type="text/css" href="shinyFontStyle.css">')
		var elements = $('.shinyFont')
		for(var i=0;i<elements.length;i++){
			var text = $(elements[i]).text();
			$(elements[i]).attr('data-text',text);
		}
	})	
})()
