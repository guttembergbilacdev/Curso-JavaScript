
function contar() {
    console.log("Script carregado com sucesso!");
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passo").value);
  let resultado = document.getElementById("resultado");

  if (passo <= 0) {
   // alert("Passo inválido! Considerando passo = 1");
    passo = 1;
  }

  resultado.innerHTML = "Contando: <br>";

  if (inicio < fim) {
    // Contagem crescente
    for (let i = inicio; i <= fim; i += passo) {
      resultado.innerHTML += `${i} 👉 `; // += Concatenação 
    }
  } else {
    // Contagem decrescente
    for (let i = inicio; i >= fim; i -= passo) {
      resultado.innerHTML += `${i} 👉 `;
    }
  }
    resultado.innerHTML += "🏁";
}