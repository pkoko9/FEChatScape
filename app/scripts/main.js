// 1 - When Submit button is pushed (onClick)
// 2 - Store it as a variable
// 3 - Push it into Buck's database

$(document).ready(onReady); 

	function onReady() {
	$('#userSubmit').on('click', onSubmitButtonClick);

		function onSubmitButtonClick() {

			$.post(
			'https://chatscape.herokuapp.com/chats/new', //something is wrong with the server URL it's not allowing
			{
				
				user: $('#userCreate').val(),

				message: $('#message').val(),
				
			},
			function(message) {
				console.log(message)
			},
			'json'
		);
		}
	}
