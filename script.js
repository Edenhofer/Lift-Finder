function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("from").value = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("from").value = "Latitude: " + position.coords.latitude
    	+ "<br>Longitude: " + position.coords.longitude; 
}
function donate() {
	window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9ZAYWC36LQVZQ&submit.x=35&submit.y=2", "_blank");
}