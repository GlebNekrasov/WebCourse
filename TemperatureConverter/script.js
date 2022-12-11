(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector(".conversion-button");

        button.addEventListener("click", function (e) {
            e.preventDefault();

            var outputNode = document.querySelector(".output-container");

            if (outputNode !== null) {
                outputNode.remove();
            }

            var temperatureInputField = document.getElementById("input-temperature");
            var inputTemperature = temperatureInputField.value;
            var celsiusTemperature = parseFloat(inputTemperature);
            var errorMessage = document.querySelector(".error");

            if (isNaN(celsiusTemperature)) {
                temperatureInputField.classList.add("invalid-field");
                errorMessage.style.display = "block";
            } else {
                temperatureInputField.classList.remove("invalid-field");
                errorMessage.style.display = "none";
                document.getElementById("input-temperature").value = "";

                var outputDiv = document.createElement("div");
                outputDiv.classList.add("output-container");
                document.body.appendChild(outputDiv);

                var celsiusValue = document.createElement("span");
                celsiusValue.textContent = celsiusTemperature.toString();
                celsiusValue.classList.add("temperature-value");

                var celsiusParagraph = document.createElement("p");
                celsiusParagraph.textContent = "Температура в градусах Цельсия: ";
                outputDiv.appendChild(celsiusParagraph);
                celsiusParagraph.appendChild(celsiusValue);

                var kelvinTemperature = celsiusTemperature + 273.15;

                var kelvinValue = document.createElement("span");
                kelvinValue.textContent = kelvinTemperature.toString();
                kelvinValue.classList.add("temperature-value");

                var kelvinParagraph = document.createElement("p");
                kelvinParagraph.textContent = "Температура в Кельвинах: ";
                outputDiv.appendChild(kelvinParagraph);
                kelvinParagraph.appendChild(kelvinValue);

                var fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

                var fahrenheitValue = document.createElement("span");
                fahrenheitValue.textContent = fahrenheitTemperature.toString();
                fahrenheitValue.classList.add("temperature-value");

                var fahrenheitParagraph = document.createElement("p");
                fahrenheitParagraph.textContent = "Температура в Фаренгейтах: ";
                outputDiv.appendChild(fahrenheitParagraph);
                fahrenheitParagraph.appendChild(fahrenheitValue);
            }
        });
    });
})();