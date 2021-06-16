// Ejercicio 139: Uso del método toLocaleDateString de la clase Date.

var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE', options));
// expected output: Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString('ar-EG', options));
// expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString('ko-KR', options));
// expected output: 2012년 12월 20일 목요일