function verificarDocumentos() {
            let tieneCedula = document.getElementById("cedula").value === "true";
            let tienePasaporte = document.getElementById("pasaporte").value === "true";
            let resultado = document.getElementById("resultado1");
            
            if (tieneCedula || tienePasaporte) {
                resultado.innerHTML = "✓ Puedes entrar";
            } else {
                resultado.innerHTML = "✗ Necesitas cédula o pasaporte";
            }
            resultado.style.display = "block";
        }

        function aplicarDescuento() {
            let esEstudiante = document.getElementById("estudiante").value === "true";
            let esJubilado = document.getElementById("jubilado").value === "true";
            let tieneVIP = document.getElementById("vip").value === "true";
            let resultado = document.getElementById("resultado2");
            
            if (esEstudiante || esJubilado || tieneVIP) {
                let razon = [];
                if (esEstudiante) razon.push("estudiante");
                if (esJubilado) razon.push("jubilado");
                if (tieneVIP) razon.push("VIP");
                resultado.innerHTML = "✓ ¡Tienes 15% de descuento! (" + razon.join(", ") + ")";
            } else {
                resultado.innerHTML = "✗ Sin descuento";
            }
            resultado.style.display = "block";
        }

        function verificarDia() {
            let dia = document.getElementById("dia").value;
            let esFeriado = document.getElementById("feriado").value === "true";
            let resultado = document.getElementById("resultado3");
            
            if (dia === "sábado" || dia === "domingo" || esFeriado) {
                resultado.innerHTML = "✓ ¡Día libre!";
            } else {
                resultado.innerHTML = "✗ Es día de trabajo";
            }
            resultado.style.display = "block";
        }

        function verificarAcceso() {
            let esAdmin = document.getElementById("admin").value === "true";
            let tienePermiso = document.getElementById("permiso").value === "true";
            let resultado = document.getElementById("resultado4");
            
            if (esAdmin || tienePermiso) {
                resultado.innerHTML = "✓ Acceso permitido";
            } else {
                resultado.innerHTML = "✗ No tienes permisos";
            }
            resultado.style.display = "block";
        }
