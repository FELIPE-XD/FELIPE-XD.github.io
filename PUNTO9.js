function convertCase() {
    const inputString = prompt('Ingresa una cadena:');
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();
    document.getElementById('output').innerText = `Mayúsculas: ${upperCaseString}\nMinúsculas: ${lowerCaseString}`;
  }