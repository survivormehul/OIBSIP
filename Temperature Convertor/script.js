document.getElementById('convert-btn').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(tempInput) || tempInput === '') {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedValue;
    let convertedUnit;

    switch (unit) {
        case 'C':
            convertedValue = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'F':
            convertedValue = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'K':
            if (temperature < 0) {
                resultElement.textContent = 'Temperature in Kelvin cannot be below 0.';
                return;
            }
            convertedValue = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            resultElement.textContent = 'Invalid unit selected.';
            return;
    }

    resultElement.textContent = `Converted: ${convertedValue}`;
});
