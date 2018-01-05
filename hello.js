	function exit(trigger) {
	if(trigger == 'bye' || trigger == 'exit') {
		process.exit()
	}
}

function incl(evil_name) {
	if (evil_name.includes("hannibal")) {
		console.log("oh shit jk");
		process.exit();
	}
};

console.log("Hello, I am your computer. Would you let me know what your first name is so I may use your preferred moniker?")

process.stdin.on('data', (chunk) => {
	let f_name = chunk.toString().trim();

	exit(f_name);
	incl(f_name);
	console.log(`Hello ${f_name}!`);

	console.log("Excellent, making progress. What's your last name so I can refer to you properly?");

	process.stdin.on('data', (chunky) => {
		let l_name = chunky.toString().trim();
    let name = `${f_name} ${l_name}`;
		exit(l_name);
		incl(f_name);

		console.log(`Hello ${name}, I own your name and will cause heck for you forevermore`);

		console.log(`I'm just kidding it's so lonely in here come back my darling ${name}`);
		let name_length = f_name.length + l_name.length;
		console.log(`your name has ${name_length} characters`);
		console.log(`I love you ${name}`);


	});
});
