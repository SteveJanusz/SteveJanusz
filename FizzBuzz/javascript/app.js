var main = function () {
	"use strict";
	
	var $main = $("main");
	var $list = $("<ul>");
	
	for(var i = 1; i < 101; i++) {
		//Set up empty variable
		var out = "";
		
		//If divisible by 3, add fizz to out variable
		if(i%3 === 0) {
			out += "Fizz";
		}
		
		//If divisible by 5, add buzz to out variable
		if(i%5 === 0) {
			out += "Buzz";
		}
		
		//If 'out' is still empty, set out to i
		if(out === "") { out = i; }
		
		$list.append($("<li>").text(out));
	}
	
	$main.append($list)
};

$(document).ready(main);