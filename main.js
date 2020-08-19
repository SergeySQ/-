'use strict';

const dataAndTime = new Date(),
    h = dataAndTime.getHours(),
    m = dataAndTime.getMinutes(),
    s = dataAndTime.getSeconds(),
    d = dataAndTime.getDay(),
    date = dataAndTime.getDate(),
    year = dataAndTime.getFullYear(),
    day = new Array("Воскресенье", "Понедельник", "Вторник",
        "Среда", "Четверг", "Пятница", "Суббота"),
    month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря");

function showData(dataAndTime) {
    let h = dataAndTime.getHours().toString(),
        m = dataAndTime.getMinutes().toString(),
        s = dataAndTime.getSeconds().toString(),
        d = dataAndTime.getDay().toString(),
        date = dataAndTime.getDate().toString(),
        month = dataAndTime.getMonth().toString(),
        year = dataAndTime.getFullYear();

    if (h.length < 2) {
        h = "0" + h;
    }
    if (m.length < 2) {
        m = "0" + m;
    }
    if (s.length < 2) {
        s = "0" + s;
    }
    if (date.length < 2) {
        date = "0" + date;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    document.getElementById('b').innerHTML = (h + ":" + m + ":" + s + " " + date + "." + month + "." + year);
}
showData(dataAndTime);
let changeHour = function (n) {
    switch (n) {
        case m:
            return (m == 1 || (m > 10 && m % 10 == 1)) ? 'минута' :
                ((m > 1 && m < 5) || (m > 10 && m % 10 > 1 && m % 10 < 5)) ? 'минуты' : 'минут';
        case h:
            return (h == 1 || (m > 10 && h % 10 == 1)) ? 'час' :
                ((h > 1 && h < 5) || (h > 10 && h % 10 > 1 && h % 10 < 5)) ? 'часа' : 'часов';
        case s:
            return (s == 1 || (s > 10 && s % 10 == 1)) ? 'секунда' :
                ((s > 1 && m < 5) || (s > 10 && s % 10 > 1 && s % 10 < 5)) ? 'секунды' : 'секунд';
    }
}

document.getElementById('a').innerHTML = 'Сегодня ' + day[d] + ", " + date + " " + month[dataAndTime.getMonth()] +
    " " + year + " года, " + h + " " + changeHour(h) + " " + m +
    " " + changeHour(m) + " " + s + " " + changeHour(s);


function clock_2() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    var str = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock_2").innerHTML = str;
    setTimeout("clock_2()", 1000);
};
clock_2();