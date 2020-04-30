class Email{
    static validar() {
        const nombre = document.getElementById('nombre').value;
        const mail = document.getElementById('mail').value;
        const motivo = document.getElementById('motivo').value;
        const comentario = document.getElementById('comentario').value;

        let expresion = /\w+@\w+\.+[a-z]/;

        if (nombre === "" || mail === "" || motivo === "" || comentario === "") {
            if (nombre === "") {
                document.getElementById('errorNombre').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorNombre').innerHTML = "";
                if (nombre.length > 15) {
                    document.getElementById('errorNombre').innerHTML = "<span>¡El nombre es demasiado largo!</span>";
                }
            }
            if (mail === "") {
                document.getElementById('errorEmail').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorEmail').innerHTML = "";
                if (mail.length > 35) {
                    document.getElementById('errorEmail').innerHTML = "<span>¡El Mail es demasiado largo!</span>";
                } else if (!expresion.test(mail)) {
                    document.getElementById('errorEmail').innerHTML = "<span>¡El mail no es del formato correcto!</span>";
                }
            }
            if (motivo === "") {
                document.getElementById('errorContacto').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorContacto').innerHTML = "";
                if (motivo.length > 50) {
                    document.getElementById('errorContacto').innerHTML = "<span>¡El motivo es demasiado largo!</span>";
                }
            }
            if (comentario === "") {
                document.getElementById('errorComentario').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorComentario').innerHTML = "";
            }
        } else if (nombre.length > 15 || mail.length > 35 || !expresion.test(mail) || motivo.length > 50) {
            if (nombre.length > 15) {
                document.getElementById('errorNombre').innerHTML = "<span>¡El nombre es demasiado largo!</span>";
            } else {
                document.getElementById('errorNombre').innerHTML = "";
            }
            if (mail.length > 35) {
                document.getElementById('errorEmail').innerHTML = "<span>¡El Mail es demasiado largo!</span>";
            } else if (!expresion.test(mail)) {
                document.getElementById('errorEmail').innerHTML = "<span>¡El mail no es del formato correcto!</span>";
            } else {
                document.getElementById('errorEmail').innerHTML = "";
            }
            if (telefono.length > 50) {
                document.getElementById('errorContacto').innerHTML = "<span>¡El motivo es demasiado largo!</span>";
            } else {
                document.getElementById('errorContacto').innerHTML = "";
            }
        } else {
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('motivo', motivo);
            formData.append('mail', mail);
            formData.append('comentario', comentario);
            fetch("php/email.php", { 
                method: 'POST', 
                body: formData })
                .then(function (response) {
                    return response.text();
                });
            Email.modalEd();
            document.querySelector("#aceptarEditarButton").addEventListener('click', function () {
                location.reload();
            });
        }
    }
    
    static modalEd() {
        let mascara = document.getElementById('lamascara');
        mascara.style.display = "block";
    }
}