function reverseString() {
    const inputString = prompt('Ingresa una cadena para invertir:');
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('output').innerText = `Cadena invertida: ${reversedString}`;
  }