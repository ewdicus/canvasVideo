importScripts('color.js');

// message receiver
onmessage = function(event) {
	var data = new Uint8ClampedArray(event.data);
	var data32 = new Uint32Array(event.data);
	var length32 = data32.length;
	// var imageData = event.data.imageData,
	// 	dst = imageData.data;

	/* Image Processing goes here */
	for (var i = 0; i < length32; i++) {
		j = i * 4;
		r = data[j];
		g = data[j+1];
		b = data[j+2];

		r = r + 70 <= 255 ? r + 70 : 255;

		data32[i] = (255 << 24) | // alpha
		(b << 16) | // blue
		(g << 8) | // green
		r; // red
	}

	// for (var i=0; i < dst.length; i += 4) {
	// 	if(dst[i] + 70 <= 255){
	// 		dst[i]  += 70;
	// 	}else{
	// 		dst[i] = 255;
	// 	}
	// 	dst[i+1] = 0;
	// 	dst[i+2] = 0;
	// }

	// postMessage(dst.buffer,[dst.buffer]);
	postMessage(data.buffer,[data.buffer]);
};
