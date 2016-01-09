var input_event = require('input-event');

var dev_path = process.argv[2];
if (!dev_path) {
	console.error("Usage: node listener.js <event_path>");
	console.error("Example: node listener.js event0 # For listening /dev/input/event0");
	process.exit(1);
}

var listener = new input_event(dev_path);
listener.on("keypress", console.log)
