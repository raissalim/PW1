function calcularTabuada() {
            var numero = parseInt(prompt("Digite um número inteiro:"));
            var tabuada = "";
            for (var i = 1; i <= 10; i++) {
                tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
            }
            document.getElementById("tabuada").innerHTML = tabuada;
        }
