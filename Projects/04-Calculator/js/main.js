	//Set 'global' variables

$(document)
	.ready(function() {

		// Get a reference to out output element.
		var output = $('input.display');

		// Get a reference to our button element types.
		var btnSentenceBuilder = $('button.digit, button.operator');
		var btnEquals = $('button.equals');
		var btnClear = $('button.clear');

		// Declare our global "sentence"; we want to add words to the sentence.
		var sentence = "";

		// Add words to sentence action.
		var clicker = function(evt) {
			evt.preventDefault();

			var $self = $(this);

			sentence += $self.attr('data-action');

			output.val(sentence);
		};

		// Respond to click event for sentence-builder buttons.
		btnSentenceBuilder
			.click(clicker);

		// Respond to click event when user is ready to evaulate sentence.
		// ("show me results of my expression", "interpret my sentence")
		btnEquals
			.click(function(evt) {
				evt.preventDefault();

				var $self = $(this);

				var result = eval(sentence);

				output.val(result);

				sentence = result;


			});

		// User wants to start over; respond to that click event.
		btnClear
			.click(function(evt) {
				evt.preventDefault();

				var $self = $(this);

				sentence = "";

				output.val(0);
			});		


	});

	

