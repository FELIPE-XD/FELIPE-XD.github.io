function duplicateArray() {
    const numbers = [1, 2, 3, 4, 5];
    
    // Duplica cada elemento en el array usando map
    const duplicatedNumbers = numbers.map(number => number * 2);
    
    alert(`Array original: ${numbers}`);
    alert(`Array duplicado: ${duplicatedNumbers}`);
  }