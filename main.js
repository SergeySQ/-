//1задание
let arr = [
	"321",
	"22213",
	"213213",
	"2131231",
	"32131",
	"45435345",
	"12321312",
];

for (let i = 0; i < arr.length; i++) {
	let a = arr[i];
	if (a.startsWith("2") || a.startsWith("4")) {
		console.log(a);
	}
}
//2задание
let n = 100;
for (let i = 2; i <= n; i++) {
	let a = 1;
	for (let j = 2; j <= i / 2 && a === 1; j = j + 1) {
		if (i % j === 0) {
			a = 0;
		}
	}

	if (a === 1) {
		console.log(i + ": делители этого числа: " + 1 + ", " + i);
	}
}
