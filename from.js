	function postToGoogle() {
		var field1 = $("#nameField").val();
		var field2 = $("#emailField").val();
        var field3 = $("#mobField").val();
        
		if (field1 == "") {
			alert('Please Fill Your Name');
			document.getElementById("nameField").focus();
			return false;
		}
		if (field2 == "") {
			alert('Please Fill Your Email');
			document.getElementById("emailField").focus();
			return false;
		}
		if (field3 == "" || field3.length > 10 || field3.length < 10) {
			alert('Please Fill Your Mobile Number');
			document.getElementById("mobField").focus();
			return false;
		}

		$.ajax({
			url: "https://docs.google.com/forms/d/142lKiQ3OpR1C9wrmFa4gGQEsqfOPAZJ_6eMJD6bmhLI/formResponse?",
			data: {
				"entry.438011831": field1,
				"entry.765315953": field2,
				"entry.811258236": field3
			},
			type: "POST",
			dataType: "xml",
			success: function (d) {},
			error: function (x, y, z) {

				$('#success-msg').show();
				$('#form').hide();

			}
		});
		return false;
	}