const fruitArray = ['manzana', 'banana', 'naranja', 'pera', 'uva'];

  function checkFruit() {
    const userInput = prompt('Ingresa un nombre de fruta:');
    const isFruitInArray = fruitArray.includes(userInput.toLowerCase());
    document.getElementById('output').innerText = `¿La fruta está en el array?: ${isFruitInArray}`;
  }