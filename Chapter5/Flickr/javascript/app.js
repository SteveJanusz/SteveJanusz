var main = function() {
	"use strict";
	
	//Flickr url.
	$("main .input button").on("click", searchForImages);

};

var searchForImages = function() {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $("main .input input").val() + "&format=json&jsoncallback=?";
	
	window.images = [];
	window.index = 0;
	
	$.getJSON(url, function(flickrResponse) {
		flickrResponse.items.forEach(function(photo) {
			//var $img = $("<img>").hide();
			//$img.attr("src", photo.media.m);
			//$("main .photos").append($img);
			//$img.fadeIn();
			window.images.push(photo.media.m);
		});
		
		//Clear the current setTimeout so it is not running multiple times.
		clearTimeout(window.timer);
		displaySlideshow();
	});
	
	
}

var displaySlideshow = function() {
	
	console.log("Test");
	console.log(window.index);
	console.log(window.images.length);
	
	//Remove previous image (if there is one)
	$("main .photos").empty();
	
	//Display an image.
	var $img = $("<img>").hide();
	$img.attr("src", window.images[window.index]);
	$("main .photos").append($img);
	$img.fadeIn();
	
		
	//Increment the index by 1, reset to 0 at the end.
	window.index = (window.index+1) % window.images.length
	
	window.timer = setTimeout(function() {
		//Run the function again.
		displaySlideshow();
	}, 3000);
}

$(document).ready(main);