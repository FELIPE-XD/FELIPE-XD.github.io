function replaceVowels() {
    const inputString = prompt('Ingresa una cadena:');
    const replacedString = inputString.replace(/[aeiouAEIOU]/g, '*');
    document.getElementById('output').innerText = `Cadena con vocales reemplazadas: ${replacedString}`;
  }