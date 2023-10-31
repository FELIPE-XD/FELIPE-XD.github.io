function checkAnagrams() {
    const word1 = prompt('Ingresa la primera palabra:');
    const word2 = prompt('Ingresa la segunda palabra:');

    // Convierte las palabras a minúsculas y ordena sus letras
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');

    // Verifica si las palabras son anagramas
    const areAnagrams = sortedWord1 === sortedWord2;

    if (areAnagrams) {
      alert('Las palabras son anagramas.');
    } else {
      alert('Las palabras no son anagramas.');
    }
  }