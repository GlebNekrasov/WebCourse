(function () {
    var countriesArray = [
        {
            name: "Россия",
            cities: [
                {
                    name: "Москва",
                    population: 12655050
                },
                {
                    name: "Казань",
                    population: 1257341
                },
                {
                    name: "Новосибирск",
                    population: 1620162
                },
                {
                    name: "Омск",
                    population: 1139897
                },
                {
                    name: "Екатеринбург",
                    population: 1495066
                },
                {
                    name: "Красноярск",
                    population: 1092851
                }
            ]
        },
        {
            name: "Япония",
            cities: [
                {
                    name: "Токио",
                    population: 13953577
                },
                {
                    name: "Осака",
                    population: 2685481
                },
                {
                    name: "Йокогама",
                    population: 3681279
                }
            ]
        },
        {
            name: "Франция",
            cities: [
                {
                    name: "Париж",
                    population: 2206488
                },
                {
                    name: "Марсель",
                    population: 869815
                },
                {
                    name: "Лион",
                    population: 506615
                },
                {
                    name: "Ницца",
                    population: 343895
                }
            ]
        },
        {
            name: "Италия",
            cities: [
                {
                    name: "Рим",
                    population: 2870500
                },
                {
                    name: "Милан",
                    population: 1378689
                },
                {
                    name: "Неаполь",
                    population: 956183
                },
                {
                    name: "Турин",
                    population: 878735
                }
            ]
        }
    ];

    function findMaxCitiesCountCountries(countries) {
        var maxCitiesCount = Math.max.apply(null, countries.map(function (country) {
            return country.cities.length;
        }));

        var maxCitiesCountCountries = countries
            .filter(function (country) {
                return country.cities.length === maxCitiesCount;
            })
            .map(function (country) {
                return country.name;
            })
        ;

        console.log("Страны с максимальным количеством городов: " + maxCitiesCountCountries.join(", "));
    }

    function getCountriesPopulation(countries) {
        var countriesPopulation = {};

        countries.forEach(function (country) {
            var countryName = country.name;
            countriesPopulation[countryName] = country.cities.reduce(function (citiesPopulation, city) {
                return citiesPopulation + city.population;
            }, 0);
        });

        console.log("страны и численность населения их городов: ", countriesPopulation);
    }

    findMaxCitiesCountCountries(countriesArray);
    getCountriesPopulation(countriesArray);
})();