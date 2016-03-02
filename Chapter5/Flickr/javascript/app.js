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
	});
	
}

$(document).ready(main);