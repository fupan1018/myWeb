"use strict";
document.addEventListener("DOMContentLoaded", function() {
	(function() {
		var aEle = document.getElementsByClassName("objs");
		window.addEventListener("load", fnAnimate, false);
		window.addEventListener("resize", fnAnimate, false);
		window.addEventListener("scroll", fnAnimate, false);

		function fnAnimate() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollBottom = scrollTop + clientHeight;
			for (var i = 0; i < aEle.length; i++) {
				var iTop = getOffset(aEle[i]).y;
				if (iTop <= scrollBottom) {
					addClass(aEle[i], "animated")
				}
			}
		}
	})()
}, false);