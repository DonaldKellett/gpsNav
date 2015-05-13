# gpsNav

A *customizable* app that acts as an online GPS tracking device.

## Initializing gpsNav

To initialize gpsNav on your website or app, simply follow the instructions below:

1. Copy and paste the following HTML code somewhere between your "body" tags.

```html
<img src="placeholder.jpg" id="map" />
<p><span id="error"></span></p>
```

The placeholder.jpg image is simply a placeholder image that displays in case the Javascript does not work or if the app has to be initialized when a button is pressed.  What's most important is that you have an "img" tag with id="map" and another text-holding tag that has id="error".

2. Include the app file

Of course, to use the application, you must add these "script" tags somewhere in your document.

```html
<script src="gpsNav.js"></script>
```

3. Initialize the app

The app does not start itself.  To call it you must add the following code in another "script" tag (or JS file) AFTER you have included the "script" tags above.

```js
gpsNav.init();
```

This runs the app with the most basic settings.  However, you may want to customize your GPS navigation device according to your needs.

4. Customizing the app

If you want to customize the gpsNav app, simply pass an object as the argument in the "init" function.  For example:

```js
gpsNav.init({
	// This is the object
	p1: "This is Property One",
	p2: "This is Property Two",
	// ...
	pn: "This is Property number N"
});
```

Now let's see what arguments (properties of the object) we can change.

This app provides the following properties:

(1) zoom - this defines how much you want to zoom in your map.  "1" shows the whole globe, and the larger the number, the more zoomed in (precise) the map will be.  Give this property a numeric value.

(2) width - this defines the map width (in pixels).  Give this property a numeric value (e.g. pass the number 400 instead of the string "400px").

(3) height - this defines the map height (in pixels).  Give this property a numeric value.

(4) error - this is an OBJECT.  More on Part Five.

5. Defining your own error images and text

If you initialized the app without the "error" object, every time there is an error (regardless of the type of error), a red cross will show.  Furthermore, the messages shown to the visitor are also very simple:

Permission Denied - "Permission denied."

Position Unavailable - "Position unavailable."

Timeout - "Timed out."

Unknown Error - "An unknown error occurred."

If you wanted to use this app on a company webpage, for example, if there is an error and the visitor receives the error message, the visitor may not be very happy because the messages don't sound very polite!  A better way to display an error to a visitor is to use a statement such as "Sorry, an unknown error occurred.  Please try to refresh the page to see if it works."  Right?

This app makes it very simple to set your own error messages for each and every case, including the corresponding image.

For example, if the user's position is unavailable, you may want to display an image called "positionUnavailable.png" and display a message that says "Sorry, your position is currently unavailable.  Try checking your Internet connection."

The code you should add is:

```js
gpsNav.init({
	otherProperties: null, // Let's now focus on the "error" property
	error: {
		positionUnavailable: {
			image: "positionUnavailable.png",
			text: "Sorry, your position is currently unavailable.  Try checking your Internet connection."
		}
	}
});
```

Because you have not changed any other settings, the other settings (such as map size and zoom level) will still be at default value.  However, now, when the visitor's position is unavailable, the image displayed will be "positionUnavailable.png" and the text displayed (message) will be "Sorry, your position is currently unavailable.  Try checking your Internet connection" instead of the default: a huge (and I dare say offensive) red cross and an impolite message saying "Position unavailable."  Just try it!

The other errors can also be set this way, using the same notation.

Try initializing the app with the following code:

```js
gpsNav.init({
	zoom: 17,
	width: 800,
	height: 600,
	error: {
		permissionDenied: {
			image: "permissionDenied.jpg",
			text: "Come on, I won't use your information!"
		},
		positionUnavailable: {
			image: "positionUnavailable.jpg",
			text: "Oh, that sucks!  Are you lost?"
		},
		timeout: {
			image: "timeout.gif",
			text: "Oh, I'm really sorry.  It seems your position has timed out."
		},
		unknownError: {
			image: "unknownError.png",
			text: "Sorry, I don't know what happened to the app or your computer.  Chances are that the problem is in your computer (haha!*).  *Sorry, that was a bit rude."
		}
	}
});
```

Now, you have enabled the following custom settings:

(1) Your zoom is now 17, which is closer than the original zoom: 14

(2) Your map width is 800 and your map height is 600 (pixels), which makes the map 4 times larger than the default settings (2x2=4)

(3) When there is an error, different images display according to the type of error and different texts (messages) are presented to the user.  How cool is that?

For your reference, below are the default settings.

## Default

```js
// This is the same as simply calling gpsNav.init()

gpsNav.init({
	zoom: 14,
	width: 400,
	height: 300,
	error: {
		permissionDenied: {
			image: "error.png",
			text: "Permission denied."
		},
		positionUnavailable: {
			image: "error.png",
			text: "Position unavailable."
		},
		timeout: {
			image: "error.png",
			text: "Timed out."
		},
		unknownError: {
			image: "error.png",
			text: "An unknown error occurred."
		}
	}
});
```

## License

This is MIT Licensed.  Read the LICENSE file for details.