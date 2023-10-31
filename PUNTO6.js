function countWords() {
    const inputString = prompt('Ingresa una frase:');
    const wordCount = inputString.split(' ').filter(word => word !== '').length;
    document.getElementById('output').innerText = `Número de palabras: ${wordCount}`;
  }