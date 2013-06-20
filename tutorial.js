$(function(){
	
	var options = {
		delay: -1,
		enableKeyBinding: true
	}

	var trip = new Trip([
	    { 
	        sel : $('#box2'),
	        content : 'float: left; // aweful'
	    },
	    { 
        sel : $('#box2'),
        content : 'display: inline-block; // yes please!'
	    },
	    { 
        sel : $('#box2'),
        content : 'width: 500px; // bad'
	    },
	    { 
        sel : $('#box2'),
        content : 'width: 50%; // responsive'
	    },
	    { 
        sel : $('#num3'),
        content : 'text-align: right; // X'
	    },
	    { 
        sel : $('#num3'),
        content : 'text-align: end; // :-)'
	    },
	    { 
        sel : $('#boxes'),
        content : 'display: inline-block;'
	    },
	    { 
        sel : $('#box2'),
        content : '@media screen and (max-width:500px)'
	    },
	    { 
        sel : $('#box2'),
        content : 'width: 100%;'
	    },
	    { 
        sel : $('h1'),
        content : 'font-size: 20px; // NO!',
				position: 's'
	    },
	    { 
        sel : $('h1'),
        content : 'font-size: 1.5em;',
				position: 's'
	    }
	
	], options); // details about options are listed below

	trip.start();
	
	$('body').bind('keypress', function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
	 if(code == 13) { // "Enter" key pressed
		$('.trip-block').toggle();
	 }
	});
	

});