let data = JSON.stringify({});
let respuesta = '';

async function obtenerTemplates() {
    try {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://zjj9v6.api.infobip.com/whatsapp/2/senders/573232326930/templates',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic TUFHSU5FLkNYOmdDUEouOUhyNDNZaiN2Rw=='
            },
            data: data
        };

        const response = await axios.request(config);
        respuesta = await response.data.templates;
    } catch (error) {
        console.log(error);
    }

    return respuesta
}

// ---------------------- CREATE TEMPLATES ----------------------------- // 

/*function enviarSolicitudPost() {
  // Obtener los valores de los campos del formulario
  const name = document.getElementById("nombrePlantilla").value;
  const select = document.getElementById("tipoCategoria");
  const category = select.value;
  // const email = document.getElementById("email").value;
  const Selectlanguage = document.getElementById("language");
  const language = Selectlanguage.value;


  // Crear objeto de datos con los campos del formulario
  const datos = {
    name,
    language,
    category,
    structure: {
      header: null,
      body: {
        text: "Hola te presentamos nuestro menu de atencion al cliente cuentanos si necesitas mas ayudas (❁´◡`❁)"
      }
    },
    footer: null
  }

  // Realizar la solicitud POST utilizando fetch()
  fetch('https://zjj9v6.api.infobip.com/whatsapp/2/senders/573232326930/templates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic TUFHSU5FLkNYOmdDUEouOUhyNDNZaiN2Rw=='
    },
    body: JSON.stringify(datos)
  })
    .then(function (response) {
      // Manejar la respuesta de la API
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error en la solicitud POST');
      }
    })
    .then(function (data) {
      // Hacer algo con la respuesta de la API
      console.log(data);
    })
    .catch(function (error) {
      // Manejar errores de la solicitud
      console.log(error);
    });
}*/


