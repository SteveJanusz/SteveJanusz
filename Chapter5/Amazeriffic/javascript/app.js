var main = function(toDoObjects) {
	"use strict";
	
	var toDos = toDoObjects.map(function(toDo) {
		return toDo.description;
	});
	
	var addItemToList = function() {
		var $input = $("main .content input");
		var $val = $input.val();
		if($val != "") {
			toDos.push($val);
			$input.val("");
		}
	};
	
	$(".tabs a span").toArray().forEach(function(element) {
		var $element = $(element);
		$element.on("click", function() {
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			
			if($element.parent().is(":nth-child(1)")) {
				
				var $content = $("<ul>");
				
				//Slice is needed so we do not modify the original array.
				toDos.slice().reverse().forEach(function(todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
				
			} else if($element.parent().is(":nth-child(2)")) {
				
				var $content = $("<ul>");
				toDos.forEach(function(todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			
			} else if($element.parent().is(":nth-child(3)")) {
				console.log("The tags tab was clicked.")
			} else if($element.parent().is(":nth-child(4)")) {

				var $content = $("<div>");
				
				var $input = $("<input>");
				$input.on("keypress", function(event) {
					if(event.keyCode === 13) {
						addItemToList();
					}
				});
				$content.append($input);
				
				var $button = $("<button>").text("Add");
				$button.on("click", function() {
					addItemToList();
				});
				$content.append($button);
				$("main .content").append($content);
			
			}
			
			return false;
		});
	});
	
	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function() {
	$.getJSON("todos.json", function(toDoObjects) {
		main(toDoObjects);
	});
});