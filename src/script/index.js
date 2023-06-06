let campos  = document.querySelectorAll('.campo');

function ativarCampoObrigatorio(indice){
    let spans = document.querySelectorAll('.campo-obrigatorio');
    spans[indice].classList.add('ativar');
}

function desativarCampoObrigatorio(indice){
    let spans = document.querySelectorAll('.campo-obrigatorio');
    spans[indice].classList.remove('ativar');
}

function campoObrigatorio(){
    addEventListener('click', () => {
        campos.forEach( (campos , indice) => {
            if(campos.value ===""){
                campos.classList.add('borda-vermelha');
                ativarCampoObrigatorio(indice)
                event.preventDefault()
            }else{
                campos.classList.remove('borda-vermelha');
                desativarCampoObrigatorio(indice)
            }
        })
    })
};

campos.forEach( campos => {
    campos.addEventListener('change', () => {
        if(campos.value !==""){
            campos.classList.add('borda-verde')
        }else{
            campos.classList.add('borda-vermelha')
        }
    })
});




