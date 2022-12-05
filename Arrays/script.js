(function() {
    var array1 = [54, 32, 17, 1340, 45, 237, 22209, 1, -18, 102, 2743, 65, 42, 32, 17, 257, 24, 678, 37, 389, 140];

    console.log("Исходный массив:");
    console.log(array1.join(", "));

    array1.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Исходный массив, отсортированный по убыванию:");
    console.log(array1.join(", "));

    var array2 = array1.slice(0, 5);
    var array3 = array1.slice(array1.length - 5, array1.length);

    console.log("Подмассив из первых 5 элементов исходного массива, отсортированного по убыванию:");
    console.log(array2.join(", "));
    console.log("Подмассив из последних 5 элементов исходного массива, отсортированного по убыванию:");
    console.log(array3.join(", "));

    function calculateEvenNumbersSum(accumulator, item) {
        if (item % 2 === 0) {
            return accumulator + item;
        }

        return accumulator;
    }

    console.log("Сумма четных чисел массива равна:");
    console.log(array1.reduce(calculateEvenNumbersSum, 0));

    var array4 = [];

    for (var i = 1; i <= 100; ++i) {
        array4.push(i);
    }

    console.log("Создан массив чисел от 1 до 100:");
    console.log(array4);

    function calculateEvenNumbersSquareSum(accumulator, item) {
        if (item % 2 === 0) {
            return accumulator + item * item;
        }

        return accumulator;
    }

    console.log("Сумма квадратов четных чисел массива равна:");
    console.log(array4.reduce(calculateEvenNumbersSquareSum, 0));
})();