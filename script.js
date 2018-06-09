
var func = {
	box_cont : {
		'box-php' : { 
			'add_class' : '', 
			'button' 	: {
				'add_class' : 'btn-warning',
				'addr' : '#'
			}
		},
		'box-js' : { 
			'add_class' : '', 
			'button' 	: {
				'add_class' : 'btn-success',
				'addr' : '#'
			}
		},
		'box-sym' : { 
			'add_class' : '', 
			'button' 	: {
				'add_class' : 'btn-primary',
				'addr' : '#'
			}
		},
		'box-c' : { 
			'add_class' : '', 
			'button' 	: {
				'add_class' : 'btn-info',
				'addr' : '#'
			}
		},
		'box-ci' : { 
			'add_class' : '', 
			'button' 	: {
				'add_class' : 'btn-primary',
				'addr' : '#'
			}
		}
	},
	// Pokaz jeden typ box-a
	displayBoxLang : function(lang){
		var speed 	= 1;
			lang 	= lang || 'all';
		if (lang === 'all') {
			$('#box-prog').children().show(speed);
		} else {
			$('#box-prog').children().hide(speed);
			$('.box-'+lang).show(speed);
		}
	},
	goToLocation(addr){
		window.location.replace(addr);
	},
	// Wyznacz class box
	getClass : function(name) {
		var myRegexp 	= /(.*)(box-[a-zA-Z]*)(.*)/g;
		var match 		= myRegexp.exec(name);
		// return (match[2] != "") ? true : false;
		return match ? match[2] : "";
	}
};

$(function() {
	$('#box-prog').children().each(function(i,v){
		var box 	= $(v);
		var cl 		= func.getClass( box.attr('class') );
		console.log(cl)
		var boxes 	= func.box_cont;

		if (boxes[cl]) {
			var box_s 		= boxes[cl];
			var button_c 	= box_s['button']['add_class'];
			var button_a 	= box_s['button']['addr'];
			box.find('.link')
				.addClass(button_c)
				// .attr('onclick',"func.window_replace('"+ button_a +"')");
		}
	});
});