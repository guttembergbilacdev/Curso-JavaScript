
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
               // Criança
                img.setAttribute('src', 'fotocriança1.jpg')
            } else if (idade < 21) {
               // Jovem
                img.setAttribute('src', 'fotoadolecente1.jpg')
            } else if (idade < 50) {
               // Adulto
                img.setAttribute('src', 'fotoadulto.jpg')
            } else {
               // Idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotocriança.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoadolecente.jpg')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'fotoadulta.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        img.style.width = "300px"
        res.appendChild(img);
    }
}

