(function () {
    var countriesArray = [
        Russia = {
            countryName: "Россия",
            countryCities: [
                Moscow = {
                    cityName: "Москва",
                    cityPopulation: 12655050
                },
                Kazan = {
                    cityName: "Казань",
                    cityPopulation: 1257341
                },
                Novosibirsk = {
                    cityName: "Новосибирск",
                    cityPopulation: 1620162
                },
                Omsk = {
                    cityName: "Омск",
                    cityPopulation: 1139897
                },
                Ekaterinburg = {
                    cityName: "Екатеринбург",
                    cityPopulation: 1495066
                },
                Krasnoyarsk = {
                    cityName: "Красноярск",
                    cityPopulation: 1092851
                }
            ]
        },
        Japan = {
            countryName: "Япония",
            countryCities: [
                Tokyo = {
                    cityName: "Токио",
                    cityPopulation: 13953577
                },
                Osaka = {
                    cityName: "Осака",
                    cityPopulation: 2685481
                },
                Yokohama = {
                    cityName: "Йокогама",
                    cityPopulation: 3681279
                }
            ]
        },
        France = {
            countryName: "Франция",
            countryCities: [
                Paris = {
                    cityName: "Париж",
                    cityPopulation: 2206488
                },
                Marcel = {
                    cityName: "Марсель",
                    cityPopulation: 869815
                },
                Lyon = {
                    cityName: "Лион",
                    cityPopulation: 506615
                },
                Nice = {
                    cityName: "Ницца",
                    cityPopulation: 343895
                }
            ]
        },
        Italy = {
            countryName: "Италия",
            countryCities: [
                Rome = {
                    cityName: "Рим",
                    cityPopulation: 2870500
                },
                Milan = {
                    cityName: "Милан",
                    cityPopulation: 1378689
                },
                Naples = {
                    cityName: "Неаполь",
                    cityPopulation: 956183
                },
                Turin = {
                    cityName: "Турин",
                    cityPopulation: 878735
                }
            ]
        },
    ];

    var maxCitiesCount = Math.max.apply(Math, countriesArray.map(function (item) {
        return item.countryCities.length
    }));

    var maxCitiesCountCountriesArray = countriesArray.filter(function (item) {
        return item.countryCities.length === maxCitiesCount;
    });

    var maxCitiesCountCountries = maxCitiesCountCountriesArray.map(function (item) {
        return item.countryName;
    })

    console.log("Страны с максимальным количеством городов: " + maxCitiesCountCountries.join(", "));

    var countries = {};

    countriesArray.forEach(function (item) {
        var countryName = item.countryName;
        countries[countryName] = item.countryCities.reduce(function (accumulator, item) {
            return accumulator + item.cityPopulation;
        }, 0);
    })

    console.log("страны и численность населения их городов: ", countries);
})();