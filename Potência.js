function calcularPotencia() {
  
     let b = parseInt(document.getElementById("baseDaPotencia").value);
      let ex = parseInt(document.getElementById("expoenteDaPotencia").value);
      let resultadoPotencia = Math.pow(b, ex);// metodo oara calcular de forma simples o edpoente
  document.getElementById("resultado").innerText = "O resultado da potência é: " + resultadoPotencia;
}
