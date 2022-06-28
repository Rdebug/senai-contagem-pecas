export class Formulario{
    navegarPorForm(atual, proxima){
        let formAtual = document.querySelector(`[data-tela = ${atual}]`);
        let formSeguinte = document.querySelector(`[data-tela = ${proxima}]`);
        esconder(formAtual);
        mostrar(formSeguinte);
    }

    realcarCampoErro(campo)
    {
        campo.classList.add('border-error');
        setTimeout(() => {
            campo.classList.remove('border-error');
        }, 5000);
    }
}

function mostrar(tela)
{
    tela.classList.remove('invisible');
}

function esconder(tela)
{
    tela.classList.add('invisible');
}

