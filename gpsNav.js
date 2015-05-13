"use strict";

/*
	gpsNav.js
	The main JS file for the gpsNav app
	(c) Donald Leung.  All rights reserved.
	P.S. Do not edit this code unless you are an experienced coder in Javascript - change the settings by passing arguments in the gpsNav.init() function.
*/

// Declaring variables

var zoom,
	width,
	height,
	permissionDeniedImage,
	permissionDeniedMessage,
	positionUnavailableImage,
	positionUnavailableMessage,
	timeoutImage,
	timeoutMessage,
	unknownErrorImage,
	unknownErrorMessage;

// Actual gpsNav app

var gpsNav = {
	init: function(settings) {
		if (!settings) {
			// If no arguments are passed, use all default values
			zoom = 14;
			width = 400;
			height = 300;
			permissionDeniedImage = "error.png";
			permissionDeniedMessage = "Permission denied.";
			positionUnavailableImage = "error.png";
			positionUnavailableMessage = "Position unavailable.";
			timeoutImage = "error.png";
			timeoutMessage = "Timed out.";
			unknownErrorImage = "error.png";
			unknownErrorMessage = "An unknown error occurred.";
		} else {
			if (settings.zoom) {
				// If user modifies zoom level, then use their value
				zoom = settings.zoom;
			} else {
				zoom = 14; // Default
			}
			if (settings.width) {
				// If user modifies map width, use their value
				width = settings.width;
			} else {
				width = 400; // Default
			}
			if (settings.height) {
				// If user modifies map height, use their value
				height = settings.height;
			} else {
				height = 300; // Default
			}
			if (!settings.error) {
				// If user does not modify error settings, use all default values
				permissionDeniedImage = "error.png";
				permissionDeniedMessage = "Permission denied.";
				positionUnavailableImage = "error.png";
				positionUnavailableMessage = "Position unavailable.";
				timeoutImage = "error.png";
				timeoutMessage = "Timed out.";
				unknownErrorImage = "error.png";
				unknownErrorMessage = "An unknown error occurred.";
			} else {
				if (settings.error.permissionDenied.image) {
					// If user modifies the image, then use their image
					permissionDeniedImage = settings.error.permissionDenied.image;
				} else {
					permissionDeniedImage = "error.png"; // Default
				}
				if (settings.error.permissionDenied.text) {
					// If user modifies the text displayed when visitor denies access, use their message instead
					permissionDeniedMessage = settings.error.permissionDenied.text;
				} else {
					permissionDeniedMessage = "Permission denied."; // Default
				}
				if (settings.error.positionUnavailable.image) {
					// If user modifies this image, use their image instead
					positionUnavailableImage = settings.error.positionUnavailable.image;
				} else {
					positionUnavailableImage = "error.png"; // Default
				}
				if (settings.error.positionUnavailable.text) {
					// If user modifies the text, use their text instead
					positionUnavailableMessage = settings.error.positionUnavailable.text
				} else {
					positionUnavailableMessage = "Position unavailable."; // Default
				}
				if (settings.error.timeout.image) {
					// If user modifies image, use their image
					timeoutImage = settings.error.timeout.image;
				} else {
					timeoutImage = "error.png"; // Default
				}
				if (settings.error.timeout.text) {
					// If user modifies text, use theirs
					timeoutMessage = settings.error.timeout.text;
				} else {
					timeoutMessage = "Timed out."; // Default
				}
				if (settings.error.unknownError.image) {
					// If user modifies image, use theirs
					unknownErrorImage = settings.error.unknownError.image;
				} else {
					unknownErrorImage = "error.png"; // Default
				}
				if (settings.error.unknownError.text) {
					// If user modifies text, use theirs
					unknownErrorMessage = settings.error.unknownError.text;
				} else {
					unknownErrorMessage = "An unknown error occurred."; // Default
				}
			}

		}
		gpsNav.getCoords();
	},
	getCoords: function() {
		navigator.geolocation.watchPosition(gpsNav.createMap, gpsNav.displayError);
	},
	createMap: function(position) {
		// Clear error message (if any)
		document.getElementById("error").innerHTML = "";
		// Display position in Google Maps
		document.getElementById("map").src = "http://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=" + zoom + "&size=" + width + "x" + height + "&sensor=false";
	},
	displayError: function(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			document.getElementById("map").src = permissionDeniedImage;
			document.getElementById("error").innerHTML = permissionDeniedMessage;
			break;
			case error.POSITION_UNAVAILABLE:
			document.getElementById("map").src = positionUnavailableImage;
			document.getElementById("error").innerHTML = positionUnavailableMessage;
			break;
			case error.TIMEOUT:
			document.getElementById("map").src = timeoutImage;
			document.getElementById("error").innerHTML = timeoutMessage;
			break;
			case error.UNKNOWN_ERROR:
			document.getElementById("map").src = unknownErrorImage;
			document.getElementById("error").innerHTML = unknownErrorMessage;
			break;
		}
	}
};