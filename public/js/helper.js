+function($){
	var socket = io();
	$(document).ready(function(){
		$('form').on('submit',function(event){
			console.log($('form').serialize());
			socket.emit('chat message',$('#message').val());
			event.preventDefault();
		});
		socket.on('chat message',function(message){
			$messageRow = $("<div class='container-fluid'>"+
							"<pre>"+
							message+
							"</pre>"+
							"</div>");
			$("#messageContainer").append($messageRow);
		});
	});
}(jQuery);