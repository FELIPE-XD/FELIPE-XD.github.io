function wordLength() {
    const inputSentence = prompt('Ingresa una oración:');
    const words = inputSentence.split(' ');
    const wordLengths = words.map(word => word.length);
    document.getElementById('output').innerText = `Longitud de cada palabra: ${wordLengths.join(', ')}`;
  }