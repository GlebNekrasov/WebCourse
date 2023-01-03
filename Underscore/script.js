(function () {
    var people = [
        {name: "Максим", age: 37},
        {name: "Кирилл", age: 23},
        {name: "Оксана", age: 18},
        {name: "Светлана", age: 25},
        {name: "Дмитрий", age: 42},
        {name: "Максим", age: 28},
        {name: "Елена", age: 21},
        {name: "Ольга", age: 28},
        {name: "Елена", age: 24},
        {name: "Вячеслав", age: 25}
    ];

    function getAverageAge(people) {
        var agesSum = _.chain(people)
            .pluck("age")
            .reduce(function (sum, age) {
                return sum + age;
            }, 0)
            .value();

        return agesSum / people.length;
    }

    function getPeopleFrom20To30Age(people) {
        return _.chain(people)
            .filter(function (people) {
                return people.age >= 20 && people.age <= 30;
            })
            .sortBy(function (people) {
                return people.age;
            })
            .value();
    }

    function getUniqueNamesFrom20To30Age(people) {
        return _.chain(people)
            .filter(function (people) {
                return people.age >= 20 && people.age <= 30;
            })
            .pluck("name")
            .uniq()
            .sortBy()
            .reverse()
            .value();
    }

    function getNamesPeopleCount(people) {
        return _.chain(people)
            .countBy("name")
            .value()
    }

    console.log("Список людей:", people);
    console.log("Средний возраст всех людей:", getAverageAge(people));
    console.log("Список людей в возрасте от 20 до 30 лет:", getPeopleFrom20To30Age(people));
    console.log("Список уникальных имен людей в возрасте от 20 до 30 лет:", getUniqueNamesFrom20To30Age(people));
    console.log("Количество людей с именами:", getNamesPeopleCount(people));
})();