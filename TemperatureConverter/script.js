document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".conversion-button");
    var temperatureInputField = document.getElementById("input-temperature");
    var errorMessage = document.querySelector(".error");

    button.addEventListener("click", function (e) {
        e.preventDefault();

        var outputNode = document.querySelector(".output-container");

        if (outputNode !== null) {
            outputNode.remove();
        }

        var celsiusTemperature = parseFloat(temperatureInputField.value);

        if (isNaN(celsiusTemperature)) {
            temperatureInputField.classList.add("invalid-field");
            errorMessage.style.display = "block";
        } else {
            temperatureInputField.classList.remove("invalid-field");
            temperatureInputField.value = "";
            errorMessage.style.display = "none";

            var outputDiv = document.createElement("div");
            outputDiv.classList.add("output-container");
            document.body.appendChild(outputDiv);

            function addConvertedTemperature (scaleDescription, temperature) {
                var temperatureValue = document.createElement("span");
                temperatureValue.textContent = temperature.toString();
                temperatureValue.classList.add("temperature-value");

                var temperatureParagraph = document.createElement("p");
                temperatureParagraph.textContent = scaleDescription;
                outputDiv.appendChild(temperatureParagraph);
                temperatureParagraph.appendChild(temperatureValue);
            }

            var kelvinTemperature = celsiusTemperature + 273.15;
            var fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

            addConvertedTemperature("Температура в градусах Цельсия: ", celsiusTemperature);
            addConvertedTemperature("Температура в Кельвинах: ", kelvinTemperature);
            addConvertedTemperature("Температура в Фаренгейтах: ", fahrenheitTemperature);
        }
    });
});