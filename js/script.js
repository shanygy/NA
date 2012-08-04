/* Author:

*/

$(function() {
	var girlTemplate = $('#girlListItem').html(),
			eventHandlres = {
				onSurpriseClick: function() {
					var imgId = Math.ceil(Math.random() * 14), 
							fileName = 'img' + imgId + '.JPG';
					
					$("#main").append(_.template(girlTemplate, { fileName: fileName }));				
				}
			};
	
	function init() {
		var imgNum = 20;
		for (var i=0; i<imgNum; i++) {
					var imgId = Math.ceil(Math.random() * 14), 
							fileName = 'img' + imgId + '.JPG';
					
					$("#main").append(_.template(girlTemplate, { fileName: fileName }));				
		}
		$('.noten').first().addClass('selected');
		$('.no-noten:eq(1)').addClass('selected');
		
		$('.lazy').lazyload({ effect : "fadeIn" });
		bindEvents();
	}
	
	function bindEvents() {
		$('#surprise').click(function() { eventHandlres.onSurpriseClick.call(this);	});
	}
	
	init();	
	
});


