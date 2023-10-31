function searchInString() {
    const inputString = prompt('Ingresa una cadena de texto:');
    const keyword = prompt('Ingresa una palabra clave:');
    const isKeywordFound = inputString.toLowerCase().includes(keyword.toLowerCase());
    document.getElementById('output').innerText = `¿La palabra clave aparece en la cadena?: ${isKeywordFound}`;
  }