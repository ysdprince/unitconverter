// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Conversion formula: (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage
  const celsiusTemp = 25; // Replace with the Celsius temperature you want to convert
  const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  
  console.log(`Celsius: ${celsiusTemp}°C is equivalent to Fahrenheit: ${fahrenheitTemp}°F`);
  