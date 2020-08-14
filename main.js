let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
	toDay = new Date().getDay() - 1;

for (let i = 0; i < week.length; i++) {
	if (i == toDay) {
		if (week[i] == "сб" || week[i] == "вс") {
			document.write(`<p><b><i>${week[i]}</i></b></p>`);
		} else {
			document.write(`<i><p><b>${week[i]}</b></p></i>`);
		}
	} else if (week[i] == "сб" || week[i] == "вс") {
		document.write(`<i><p><b>${week[i]}</b></p></i>`);
	} else {
		document.write(`<p>${week[i]}</p>`);
	}
}
console.log(week);
