function toggleCase() {
    const words = ['hola', 'profe', 'como', 'está'];
    
    // Convierte mayúsculas a minúsculas y viceversa usando map
    const toggledWords = words.map(word => {
      return word
        .split('')
        .map(char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
        .join('');
    });
    
    alert(`Lista de palabras original: ${words.join(' ')}`);
    alert(`Lista de palabras con casos alternados: ${toggledWords.join(' ')}`);
  }