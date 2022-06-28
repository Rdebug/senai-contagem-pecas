import { Armazem } from './modules/Armazem.js';
import { Modal } from './modules/Modal.js';
import { Formulario } from './modules/Formulario.js';
import { Data } from './modules/Data.js';

Object.defineProperty(Node.prototype, 'appendChildren', {
    configurable: true,
    value: function(...children) {
        for (const child of children) {
            this.appendChild(child);
        }

        return this;
    }
});

var armazem = new Armazem;
var modal = new Modal;
var formulario = new Formulario;
var data = new Data;

//  LISTAR EVENTOS E PARTICIPANTES
window.onload = ()=>{
    let todosEventos = armazem.listarTodos();
    todosEventos.map((evento)=>{
        let tbody = document.getElementById('eventos');
        let tr = document.createElement('tr');

        let tema = document.createElement('td');
        tema.textContent = evento.descricao;

        let data = document.createElement('td');
        let dataFormatada = evento.dataEvento.split('-');
        dataFormatada = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;
        data.textContent = dataFormatada;
        
        let palestrante = document.createElement('td');
        palestrante.textContent = evento.palestrante.join(' - ');

        let listarParticipantes = document.createElement('button');
        listarParticipantes.textContent = "Visualizar Participantes";
        listarParticipantes.classList.add('c-container__btn');
        listarParticipantes.classList.add('btn-success');
        listarParticipantes.onclick = ()=>{
            modal.criar('Participantes', evento.participantes);
        }
        tbody.appendChild(tr);
        tr.appendChildren(data, palestrante, tema,  listarParticipantes)
    });
}

// INÍCIO DE CADASTRO DE NOVO EVENTO
document.getElementById('novo_evento').addEventListener('click', ()=>{
    formulario.navegarPorForm('inicio', 'data'); // Navegação do formulário
    let campoData = document.getElementById('data'); // Campo de data
    
    // FORMULÁRIO DE DATA
    
    document.getElementById('salvar_data').addEventListener('click', ()=>{
        if(campoData.value !== '' && campoData.value !== undefined){
            if(data.verificarDataPosterior(campoData.value)){ // Verifica se a data digitada é maior ou igual à data atual
                armazem.armazenarDado('data', campoData.value); // Salva o dado da data para criação do evento no final da aplicação
                
                // FORMULÁRIO DE CADASTRO DE PALESTRANTE

                formulario.navegarPorForm('data', 'palestrante');
                document.getElementById('salvar_palestrante').addEventListener('click', ()=>{
                    let campoPalestrante = document.getElementById('palestrante');
                    if(campoPalestrante.value !== '' && campoPalestrante.value !== undefined){
                        armazem.tmpPalestrante(campoPalestrante.value);
                        let maisPalestrantes = window.confirm('Deseja cadastrar mais palestrantes?'); // Verifica se o usuario gostaria de adicionar mais palestrantes
                        if(maisPalestrantes == false){
                            armazem.transferirTmpPalestrante();

                            // FORMULÁRIO DE CADASTRO DE PARTICIPANTES

                            formulario.navegarPorForm('palestrante', 'participante');
                            let nomeParticipante = document.getElementById('nome_participante');
                            let idadeParticipante = document.getElementById('idade_participante');
                            let gerarRegistros = document.getElementById('registros_aleatorios');

                            gerarRegistros.addEventListener('click',()=>{
                                armazem.gerarRegistrosAleatorios();
                            })

                            document.getElementById('salvar_participante').addEventListener('click', ()=>{
                                if(armazem.verificarCapacidadeDisponivel() == false){
                                    modal.criar('Sucesso', 'Capacidade disponível atingida, Evento será salvo em instantes');
                                    armazem.salvarEvento();
                                    setTimeout(()=>{
                                        window.location.reload();
                                    }, 5000);
                                    
                                }
                                if(nomeParticipante.value !== '' && idadeParticipante.value !== '')
                                {
                                    if(idadeParticipante.value >= 18){
                                        let participante = {
                                            nome: nomeParticipante.value,
                                            idade: idadeParticipante.value
                                        };
                                        armazem.tmpParticipante(participante);
                                        let maisParticipantes = confirm('Deseja cadastrar mais participantes?');
                                        if(maisParticipantes == false){
                                           armazem.transferirTmpParticipante();
                                           armazem.salvarEvento();
                                           window.location.reload();
                                        }
                                    }else{
                                        formulario.realcarCampoErro(idadeParticipante);
                                        modal.criar('Erro', 'Idade deve ser maior ou igual à 18 anos');
                                    }
                                }else{
                                    formulario.realcarCampoErro(nomeParticipante);
                                    formulario.realcarCampoErro(idadeParticipante);
                                    modal.criar('Erro', 'Digite nome e idade do participante');
                                }
                            })
                        }else{
                            campoPalestrante.value = '';
                        }
                    }else{
                        formulario.realcarCampoErro(campoPalestrante); // Realça o campo para avisar o usuário entenda que tem que digitar o nome do palestrante
                        modal.criar('Erro', 'Digite o nome do palestrante');
                    }
                });
            }else{
                modal.criar('Erro', 'A data precisa ser igual ou posterior à data atual!'); // Mensagem de Erro quando a data é inferior à data atual
            }
        }else{
            formulario.realcarCampoErro(campoData); // Realça o campo para avisar o usuário que precisa escolher uma data válida
            modal.criar('Erro', 'Escolha uma data válida');
        }
    });
})
// FIM DE CADASTRO DE NOVO EVENTO

document.querySelector('.c-modal').addEventListener('click', ()=>{
    modal.fechar();
});
