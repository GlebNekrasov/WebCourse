(function () {
    function sortDescending(numbersArray) {
        numbersArray.sort(function (number1, number2) {
            return number2 - number1;
        });
    }

    function getFirst5Elements(numbersArray) {
        if (numbersArray.length >= 5) {
            return numbersArray.slice(0, 5);
        }

        return numbersArray;
    }

    function getLast5Elements(numbersArray) {
        if (numbersArray.length >= 5) {
            return numbersArray.slice(length - 5);
        }

        return numbersArray;
    }

    function getEvenNumbersSum(numbersArray) {
        return numbersArray.reduce(function (sum, number) {
            if (number % 2 === 0) {
                return sum + number;
            }

            return sum;
        }, 0);
    }

    function getEvenNumbersSquares(numbersArray) {
        return numbersArray.filter(function (number) {
            return number % 2 === 0;
        }).map(function (number) {
            return number * number;
        });
    }

    var randomNumbersArray = [54, 32, 17, 1340, 45, 237, 22209, 1, -18, 102, 2743, 65, 42, 32, 17, 257, 24, 678, 37, 389, 140];
    console.log("Исходный массив:", randomNumbersArray);

    sortDescending(randomNumbersArray);

    console.log("Массив, отсортированный по убыванию:", randomNumbersArray);
    console.log("Подмассив из первых 5 элементов массива:", getFirst5Elements(randomNumbersArray));
    console.log("Подмассив из последних 5 элементов массива:", getLast5Elements(randomNumbersArray));
    console.log("Сумма четных чисел массива равна:", getEvenNumbersSum(randomNumbersArray));

    var from1To100Array = [];

    for (var i = 1; i <= 100; ++i) {
        from1To100Array.push(i);
    }

    console.log("Создан массив чисел от 1 до 100:", from1To100Array);
    console.log("Список квадратов четных чисел массива:", getEvenNumbersSquares(from1To100Array));
})();