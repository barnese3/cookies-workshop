let cookieOneUpdate = document.querySelector(".cookieOneUpdate"),
	cookieTwoUpdate = document.querySelector(".cookieTwoUpdate"),
	cookieThreeUpdate = document.querySelector(".cookieThreeUpdate"),
	cookieone = Cookies.get("CookieOne"),
	cookietwo = Cookies.get("CookieTwo"),
	cookiethree = Cookies.get("CookieThree");

function ifCookie (key, cookie, update) {
	if ( !Cookies.get(key) ){
		cookie = 0;
		addCookie(cookie, key, update);
	} else {
		cookie = Cookies.get(key);
		addCookie(cookie, key, update);
	}
}

function updateCookies (number, cookieUpdate) {
	cookieUpdate.innerHTML = `You ate ${number} of these cookies!`;
}

function addCookie (cookie, key, update) {
	cookie ++;
	Cookies.set(key, cookie);
	updateCookies(cookie, update);
}

document.addEventListener("DOMContentLoaded", function() {
	if ( Cookies.get("CookieOne") ) {
			updateCookies(cookieone, cookieOneUpdate);
	}

	if ( Cookies.get("CookieTwo") ) {
			updateCookies(cookietwo, cookieTwoUpdate);
	}

	if ( Cookies.get("CookieThree") ) {
			updateCookies(cookiethree, cookieThreeUpdate);
	}

	document.querySelector(".cookies").addEventListener("click", function(event) {
		if (event.target == document.querySelector(".cookie1img")) {
			ifCookie ("CookieOne", cookieone, cookieOneUpdate);
		}

		if (event.target == document.querySelector(".cookie2img")) {
			ifCookie ("CookieTwo", cookietwo, cookieTwoUpdate);
		}		

		if (event.target == document.querySelector(".cookie3img")) {
			ifCookie ("CookieThree", cookiethree, cookieThreeUpdate);
		}	
	});
});

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".button").addEventListener("click",function(){
     Cookies.expire("CookieOne");
     cookieOneUpdate.innerHTML = "Click to eat chocolate chip cookies";
     Cookies.expire("CookieTwo");
     cookieTwoUpdate.innerHTML = "Click to eat sugar cookies";
     Cookies.expire("CookieThree");
     cookieThreeUpdate.innerHTML = "Click to eat pink frosted cookies";
}); 
});