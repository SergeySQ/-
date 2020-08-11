"use strict";

function arg(str) {
    str = "hi";
    if (typeof str !== "string") {
        alert("Выввели не строку");
        return;
    }

    str = str.trim();
    return str.length > 30 ? str.slice(0, 30) + "..." : str;
}
console.log(arg());