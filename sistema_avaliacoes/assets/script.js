const listaDeCursos = [
    "html5",
    "css3",
    "javascript"
]

const starFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2c438" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

window.onload = ()=>{
    // Verificar se tem avaliação para cada curso
    listaDeCursos.forEach(function(curso){
        if(localStorage.getItem(curso)){
            let stars = document.querySelectorAll(`#avaliacao_${curso} button`);
            for (let index = 0; index < localStorage.getItem(curso); index++) {
                stars[index].innerHTML = starFill;
            }
        }
    });

    verificarNumero();
}

function avaliarCurso(nomeCurso, avaliacao)
{  
    localStorage.setItem(nomeCurso, avaliacao);
    window.location.reload();
}

function verificarNumero(){
    let pares = new Array();
    let impares = new Array();
    listaDeCursos.forEach((curso)=>{
        if(localStorage.getItem(curso)){
            if(verificarPar(localStorage.getItem(curso))){
                pares.push(localStorage.getItem(curso));
            }else{
                impares.push(localStorage.getItem(curso));
            }
        }
    })
    let div = document.getElementById('numeros_avaliacoes');
    div.innerHTML = `
        <p><b>Sem avaliações: </b>${listaDeCursos.length - (pares.length + impares.length)} </p>
        <p><b>Avaliações Pares: </b>${pares.length} </p>
        <p><b>Avaliações Ímpares: </b>${impares.length} </p>
    `
}
function verificarPar(avaliacao){
    if(avaliacao !== 0){
        console.log(avaliacao)
        if(avaliacao % 2 == 0){
            return true;
        }
        else{
            return false;
        }
    }
}

function resetarAvaliacoes(){
    localStorage.clear();
    window.location.reload();
}