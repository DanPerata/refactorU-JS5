$(document).on('ready', function() {



var displayNone = function(){
	$('#text').css('display','none');
	$('#text').after('<input value="'+ $('#text').text() +'">');
	

};

$('#text').on('click' ,displayNone);	
  


var displayAgain = function(){m   
	$('input').css('display','none');
	$('#text').css('display','block');
	$('#text').text($('input').val());
};



$(document).on('blur','input', displayAgain);




$(document).on('keydown','input', function (e){
	if(e.keyCode===13){
		displayAgain();
	}
})

});