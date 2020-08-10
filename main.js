'use strict';
let lang = prompt('напишите на каком языке вывести названия дни неделей','ru');
if(lang === 'ru'){
    let arr = ['пн','вт','ср','чт','пт','сб','вс'];
    console.log("С использованием if",arr);
}
if(lang === 'en'){
    let arr = ['mo','tu','we','th','fr','sa','su'];
    console.log("С использованием if",arr);
}

switch(lang){
    case 'ru':let arr = ['пн','вт','ср','чт','пт','сб','вс'];
    console.log('Switch:', arr);
    break;
    case 'en':let arr2 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    console.log('С использованием Switch:', arr2);
    break;
}
let arr = {
    'ru':['пн','вт','ср','чт','пт','сб','вс'],
    'en':['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
console.log('без ифов и switch',arr[lang]);

let namePerson = prompt('Введите имя'),
    person = 'Артем',
    personSecond = 'Максим',
    position = 'Директор',
    positionSecond = 'Преподователь',
    student = 'Студент';
let result = (namePerson === person) ? position : (namePerson === personSecond) ? positionSecond : student;
    console.log(result);