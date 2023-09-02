document.getElementById('tyu').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberInput = document.getElementById('numberInput');
    const resultsDiv = document.getElementById('results');

    let inputValue = (numberInput.value);

    if (!isNaN(inputValue)) {
        resultsDiv.innerHTML = '';

        const numberOfDoubles = 5;

        for (let i = 1; i <= numberOfDoubles; i++) {
            inputValue *= 2;
            resultsDiv.innerHTML += ` ${i}: ${inputValue}<br>`;
        }
    }
});

// switch case

let monthNumber = parseInt(prompt("Введите номер месяца (1-12):"));

switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("В этом месяце 31 день.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("В этом месяце 30 дней.");
        break;
    case 2:
        alert("В этом месяце 28 или 29 дней, в зависимости от високосного года.");
        break;

}

// if else


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");


let result;


if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Ошибка: деление на ноль";
    }
} else {
    result = "Ошибка: неверный оператор";
}


console.log("Результат: " + result);
