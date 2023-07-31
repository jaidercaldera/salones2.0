document.getElementById('formularioRegistro').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Crea un objeto con los datos del usuario
    const data = {
        name: name,
        email: email,
        password: password
    };
  
    try {
      // Envía la solicitud POST al backend con los datos del usuario
      const response = await fetch('/register/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      // Verifica si la respuesta del backend fue exitosa
      if (response.ok) {
        // Si la respuesta fue exitosa, redirige al usuario a otra página o muestra un mensaje de éxito
        // Por ejemplo, si el backend devuelve una redirección a la página de inicio después de un registro exitoso
        window.location.href = '/';
      } else {
        // Si la respuesta no fue exitosa, muestra un mensaje de error o maneja el error de alguna otra forma
        console.error('Error al registrar el usuario:', response.statusText);
      }
    } catch (error) {
      // Maneja cualquier otro error que pueda ocurrir durante la solicitud
      console.error('Error en la solicitud:', error.message);
    }
  });