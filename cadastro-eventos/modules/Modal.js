export class Modal{
    constructor(modal){
        this.modal = document.querySelector('.c-modal');
    }
    
    criar(titulo, conteudo)
    {
        this.modal.classList.remove('invisible');
        document.querySelector('.c-modal__title').innerHTML = titulo;
        if(Array.isArray(conteudo)){
            let ul = document.createElement('ul');
            document.querySelector('.c-modal__content').append(ul)
            conteudo.map((c)=>{
                let li = document.createElement("li");
                li.textContent = c.nome;
                ul.appendChild(li);
            });
        }else{
            document.querySelector('.c-modal__content').innerHTML = conteudo;
        }
    }
    
    fechar()
    {
        document.querySelector('.c-modal__title').innerHTML = '';
        document.querySelector('.c-modal__content').innerHTML = '';
        this.modal.classList.add('invisible');
    }
}  