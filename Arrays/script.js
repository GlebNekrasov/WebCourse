(function () {
    function sortDescending(numbersArray) {
        numbersArray.sort(function (number1, number2) {
            return number2 - number1;
        });

        console.log("Массив, отсортированный по убыванию:");
        console.log(numbersArray.join(", "));
    }

    function getFirstFiveNumbers(numbersArray) {
        if (numbersArray.length >= 5) {
            var firstFiveNumbersArray = numbersArray.slice(0, 5);
            console.log("Подмассив из первых 5 элементов массива:");
            console.log(firstFiveNumbersArray.join(", "));
            return firstFiveNumbersArray;
        }

        console.log("В исходном массиве меньше 5 элементов:");
        console.log(numbersArray.join(", "));
        return numbersArray;
    }

    function getLastFiveNumbers(numbersArray) {
        if (numbersArray.length >= 5) {
            var lastFiveNumbersArray = numbersArray.slice(numbersArray.length - 5);
            console.log("Подмассив из последних 5 элементов массива:");
            console.log(lastFiveNumbersArray.join(", "));
            return lastFiveNumbersArray;
        }

        console.log("В исходном массиве меньше 5 элементов:");
        console.log(numbersArray.join(", "));
        return numbersArray;
    }

    function getEvenNumbersSum(numbersArray) {
        var evenNumbersSum = numbersArray.reduce(function (sum, number) {
            if (number % 2 === 0) {
                return sum + number;
            }

            return sum;
        }, 0);

        console.log("Сумма четных чисел массива равна: " + evenNumbersSum);

        return evenNumbersSum;
    }

    function getEvenNumbersSquares(numbersArray) {
        var evenNumbersSquaresArray = numbersArray.filter(function (number) {
            return number % 2 === 0;
        }).map(function (number) {
            return number * number;
        });

        console.log("Список квадратов четных чисел массива:");
        console.log(evenNumbersSquaresArray.join(", "));
        return evenNumbersSquaresArray;
    }

    var randomNumbersArray = [54, 32, 17, 1340, 45, 237, 22209, 1, -18, 102, 2743, 65, 42, 32, 17, 257, 24, 678, 37, 389, 140];

    console.log("Исходный массив:");
    console.log(randomNumbersArray.join(", "));

    sortDescending(randomNumbersArray);

    getFirstFiveNumbers(randomNumbersArray);

    getLastFiveNumbers(randomNumbersArray);

    getEvenNumbersSum(randomNumbersArray);

    var from1To100Array = [];

    for (var i = 1; i <= 100; ++i) {
        from1To100Array.push(i);
    }

    console.log("Создан массив чисел от 1 до 100:");
    console.log(from1To100Array.join(", "));

    getEvenNumbersSquares(from1To100Array);
})();