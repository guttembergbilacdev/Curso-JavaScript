
function carregar(){
const msg = document.getElementById('mensagem');
const imagem = document.getElementById('foto');
const hora = new Date().getHours();

 if (hora >= 0 && hora < 12) {
    msg.textContent = 'Bom dia!';
    imagem.src = 'fotomanha.jpg';
    document.body.style.backgroundColor = '#FFF3B0'; // amarelo claro
} else if (hora < 18) {
    msg.textContent = 'Boa tarde!';
    imagem.src = 'fototarde.jpg';
    document.body.style.backgroundColor = '#FFB37B'; // laranja claro
} else {
    msg.textContent = 'Boa noite!';
    imagem.src = 'fotonoite.jpg';
    document.body.style.backgroundColor = '#2C2C54'; // azul escuro
}
    let corFundo;

if (hora < 12) {
    corFundo = '#FFF3B0';
} else if (hora < 18) {
    corFundo = '#FFB37B';
} else {
    corFundo = '#2C2C54';
}
}
