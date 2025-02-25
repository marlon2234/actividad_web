
        const personas = [];
        document.getElementById("formPersona").addEventListener("submit", function(event) {
            event.preventDefault();

            const fileInput = document.getElementById("foto");
            const file = fileInput.files[0];
            let fotoURL = "";
            if (file) {
                fotoURL = URL.createObjectURL(file);
            }

            const persona = {
                foto: fotoURL,
                nombre: document.getElementById("nombre").value.trim(),
                apellido: document.getElementById("apellido").value.trim(),
                edad: document.getElementById("edad").value.trim(),
                genero: document.getElementById("genero").value,
                telefono: document.getElementById("telefono").value.trim(),
                email: document.getElementById("email").value.trim(),
                direccion: document.getElementById("direccion").value.trim(),
                fecha: document.getElementById("fecha").value
            };
            personas.push(persona);
            actualizarTabla();

            this.reset();
        });

        function actualizarTabla() {
            const tabla = document.getElementById("tablaPersonas");
            tabla.innerHTML = "";
            personas.forEach(persona => {
                const fila = `<tr>
                    <td><img src="${persona.foto}" alt="Foto"></td>
                    <td>${persona.nombre}</td>
                    <td>${persona.apellido}</td>
                    <td>${persona.edad}</td>
                    <td>${persona.genero}</td>
                    <td>${persona.telefono}</td>
                    <td>${persona.email}</td>
                    <td>${persona.direccion}</td>
                    <td>${persona.fecha}</td>
                </tr>`;
                tabla.innerHTML += fila;
            });
        }
  
