/* Author:

*/

$(function() {
	var girlTemplate = $('#girlListItem').html();
	
	$('#surprise').click(function() {
		var imgId = Math.ceil(Math.random() * 14), 
				fileName = 'img' + imgId + '.JPG';
		
		$("#main").append(_.template(girlTemplate, { fileName: fileName }));
	});
});


