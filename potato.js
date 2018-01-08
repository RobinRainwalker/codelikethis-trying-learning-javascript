//write a program that prints:
//1 potato, 2 potato, 3 potato, 4! 5 potato, six potato, seven potato, More!

function potatoPoem() {
	for (let i=1; i<=8; i++) {
	if (i === 8) {
		console.log("More!")
	}
	else if (i === 4) {
		console.log("4!")
	}
	else {
		console.log( "" + i + " potato,")
	}
}
}

potatoPoem();
