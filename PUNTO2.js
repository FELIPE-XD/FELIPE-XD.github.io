function validatePassword() {
    const password = prompt('Ingresa una contraseña:');

    // Verifica la longitud de la contraseña
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Verifica si contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
      alert('La contraseña debe contener al menos una letra mayúscula.');
      return;
    }

    // Verifica si contiene al menos un número
    if (!/\d/.test(password)) {
      alert('La contraseña debe contener al menos un número.');
      return;
    }

    // Verifica si contiene espacios en blanco
    if (/\s/.test(password)) {
      alert('La contraseña no debe contener espacios en blanco.');
      return;
    }

    alert('La contraseña cumple con los criterios.');
  }