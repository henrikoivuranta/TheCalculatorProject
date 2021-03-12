function calculateTemps()
{
    var input, celsius, fahrenheit, kelvin;

    input = document.getElementById("amount1").value;

    var cCelsius;
    var cFahrenheit;
    var cKelvin;

    cCelsius = document.getElementById("Celsius");
    cFahrenheit = document.getElementById("Fahrenheit");
    cKelvin = document.getElementById("Kelvin");


    if (cCelsius.checked)
    {
        celsius = input;
        fahrenheit = celsius * 1.8 + 32;
        kelvin = celsius + 273.15;
    }

    if (cFahrenheit.checked)
    {
        fahrenheit = input;
        celsius = (fahrenheit - 32) / 1.8;
        kelvin = (fahrenheit - 32) / 1.8 + 273.15;
    }

    if (cKelvin.checked)
    {
        kelvin = input;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 1.8 + 32;
    }

    var resBox1 = document.getElementById("resultBox1");
    var resBox2 = document.getElementById("resultBox2");
    var resBox3 = document.getElementById("resultBox3");

    celsius = parseFloat(celsius).toFixed(2);
    fahrenheit = parseFloat(fahrenheit).toFixed(2);
    kelvin = parseFloat(kelvin).toFixed(2);

    resBox1.value = celsius;
    resBox2.value = fahrenheit;
    resBox3.value = kelvin;

}