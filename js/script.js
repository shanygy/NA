/* Author:

*/

$(function() {
	var strArtGirl = '<article class="art-girl"><img src="/" /></article>';
	
	$('#surprise').click(function() {
		var imgId = Math.ceil(Math.random() * 5), artGirl;
		
		artGirl = strArtGirl.replace('src="/"', 'src=img/shany' + imgId + '.JPG');
		$('#main').append($(artGirl));		
	});
});


