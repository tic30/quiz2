$(document).ready(function(e) {
	var i=0;
	var output;
    if (document.cookie != "") {
		$('h2').html(document.cookie);
	}
	else{
		$('h2').html("Start by clicking this button!");	
	}
	
    $('#button1').click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', encodeURI('http://www.mattbowytz.com/simple_api.json?data=quizData'));
		xhr.onload = function() {
    		if (xhr.status === 200) {
        		var a = xhr.responseText;
				var json_obj = $.parseJSON(a);
				output = json_obj.data[i];
				$('h2').html(output);
				$('#button1').prop('value','Change It');				
				if(i<json_obj.data.length - 1)
					i++;
				else i=0;
				addNewBtn(output);
			}
		}
		xhr.send();
	})();
	
	function addNewBtn(output1){
		$('#button1').removeClass("btn-block");
		$('#button1').addClass("col-lg-6");
		if(document.getElementById('button2') == null ){
			$('<input type="button" class="btn btn-success btn-lg col-lg-6" id="button2" value="Keep It"></input>').insertAfter('#button1');
		}
		$('#button2').click(output1, function(){
			document.cookie = output1;
			$('#note').html("Cookie Set<br/>Refresh page to see it");
		})();
		
	}
});