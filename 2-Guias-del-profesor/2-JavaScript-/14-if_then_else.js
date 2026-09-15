function verificarEdad() {
            let edad = document.getElementById("edad").value;
            let resultado = document.getElementById("resultado1");
            
            if (edad === "") {
                resultado.style.display = "none";
                return;
            }
            
            if (edad >= 18) {
                resultado.innerHTML = "✓ Eres mayor de edad";
            } else {
                resultado.innerHTML = "✗ Eres menor de edad";
            }
            resultado.style.display = "block";
        }

        function clasificarNumero() {
            let numero = document.getElementById("numero").value;
            let resultado = document.getElementById("resultado2");
            
            if (numero === "") {
                resultado.style.display = "none";
                return;
            }
            
            if (numero > 0) {
                resultado.innerHTML = "✓ El número es POSITIVO";
            } else if (numero < 0) {
                resultado.innerHTML = "✓ El número es NEGATIVO";
            } else {
                resultado.innerHTML = "✓ El número es CERO";
            }
            resultado.style.display = "block";
        }

        function calificar() {
            let nota = document.getElementById("nota").value;
            let resultado = document.getElementById("resultado3");
            
            if (nota === "") {
                resultado.style.display = "none";
                return;
            }
            
            nota = parseInt(nota);
            let calificacion;
            
            if (nota >= 90) {
                calificacion = "A - Excelente";
            } else if (nota >= 80) {
                calificacion = "B - Muy Bien";
            } else if (nota >= 70) {
                calificacion = "C - Bien";
            } else if (nota >= 60) {
                calificacion = "D - Regular";
            } else {
                calificacion = "F - Insuficiente";
            }
            
            resultado.innerHTMLstyle = `Tu calificación: ${calificacion}`;
            resultado.style.display = "block";
        }

        function validarContraseña() {
            let contraseña = "abc123";
            let ingresada = document.getElementById("contrasena").value;
            let resultado = document.getElementById("resultado4");
            
            if (ingresada === "") {
                resultado.style.display = "none";
                return;
            }
            
            if (contraseña === ingresada) {
                resultado.innerHTML = "✓ Acceso permitido";
                resultado.style.background = "#e8f5e9";
                resultado.style.color = "#2e7d32";
                resultado.style.borderColor = "#4caf50";
            } else {
                resultado.innerHTML = "✗ Contraseña incorrecta";
                resultado.style.background = "#ffebee";
                resultado.style.color = "#c62828";
                resultado.style.borderColor = "#f44336";
            }
            resultado.style.display = "block";
        }
