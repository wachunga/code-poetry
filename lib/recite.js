var fs = require('fs');

var poemPath = (process.argv[2] || './') + 'poem.json';

if (!fs.existsSync(poemPath)) {
	console.error('no poem found at ' + poemPath);
	return process.exit(1);	
}

var poem = JSON.parse(fs.readFileSync(poemPath));
if (!poem.body) {
	console.error('a poem requires a body');
	return process.exit(1);
}

/*

Supported format of poem.json:

{
	"title": <string>, 
	"body":  <path to body of poem>, (required)
	"form": <path to structure of your poem>,
	"run": <boolean>
}

*/

recite(poem);

function recite(input) {
	if (input.form) {
		//require(input.form);
		var form = fs.readFileSync(input.form, 'utf-8');
		eval(form);
	}

	if (input.title) {
		var len = input.title.length;
		console.log(input.title);
		while (len > 0) {
			process.stdout.write('-');
			len--;
		}
		process.stdout.write('\n\n');
	}

	var body = fs.readFileSync(input.body, 'utf-8');
	console.log(body);
	
	if (input.run === true) {
		// TODO: use vm
		console.log(eval(body));
	}
}