function  Tabuada() {
    let num = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let resultado = "";}
if (isNaN(num)) {
    alert("Por favor, digite um número válido.");
    return;
}
for (let i = 1; i <= 10; i++) {
    item.textContent += `${num} x ${i} = ${num * i}\n`;
`${String(i).padStart(2, '')}  ${String(num * i).padStart(2, '')}\n`
}
alert(resultado);
