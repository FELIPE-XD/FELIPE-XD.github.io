function countUniqueWords() {
    const paragraph = prompt('Ingresa un párrafo:');
    const words = paragraph.toLowerCase().split(' ');
    const uniqueWords = new Set(words);
    const uniqueWordCount = uniqueWords.size;
    document.getElementById('output').innerText = `Número de palabras únicas: ${uniqueWordCount}`;
}




  

  

  

  

  

  

  

  

  

  
