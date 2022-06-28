var tmp_palestrantes = new Array();
var tmp_participantes = new Array();
let qtdeRegistros = document.getElementById('qtde_registros');
var eventos = [
    {
        descricao: 'Programando o ano novo!',
        dataEvento: '2022-12-31',
        palestrante: 
        [
            'Professor Carlos',
            'Manoel'
        ],
        participantes: 
        [
            {
                nome: 'Francisco',
                idade: 18
            },
            {
                nome: 'Raimundo',
                idade: 25
            },
        ]
    },
    {
        descricao: 'Comentando o Natal',
        dataEvento: '2022-12-25',
        palestrante: 
        [
            'Professor Carlos'
        ],
        participantes: 
        [
            {
                nome: 'João',
                idade: 18
            },
            {
                nome: 'Pedro',
                idade: 45
            },
            {
                nome: 'Caio',
                idade: 18
            },
            {
                nome: 'Godofredo',
                idade: 25
            }
        ]
    }
];
export class Armazem{
    constructor(){
            //var participantes = localStorage.setItem('participantes', JSON.stringify(eventos))
    }

    listarTodos()
    {
        return JSON.parse(localStorage.getItem('participantes'));
    }

    armazenarDado(chave, valor)
    {
        localStorage.setItem(chave, valor);
    }

    tmpPalestrante(palestrante){
        let palestrantes = new Array();
        tmp_palestrantes.push(palestrante);
    }

    transferirTmpPalestrante(){
        armazenarDado('tmp_palestrantes', JSON.stringify(tmp_palestrantes));
    }
    
    tmpParticipante(participante){
        if(this.verificarCapacidadeDisponivel){
            let participantes = new Array();
            tmp_participantes.push(participante);
            qtdeRegistros.innerHTML = tmp_participantes.length;
        }
    }
    transferirTmpParticipante(){
        armazenarDado('tmp_participantes', JSON.stringify(tmp_participantes));
    }

    verificarCapacidadeDisponivel(){
        if(qtdeRegistros.innerHTML < 100){
            return true;
        }else{
            return false
        }
    }

    salvarEvento(){
        let novoEvento = {
            descricao: 'Evento Criado',
            dataEvento: localStorage.getItem('data'),
            palestrante: JSON.parse(localStorage.getItem('tmp_palestrantes')),
            participantes: JSON.parse(localStorage.getItem('tmp_participantes'))
        }
        eventos.push(novoEvento);
        localStorage.removeItem('data');
        localStorage.removeItem('tmp_palestrantes');
        localStorage.removeItem('tmp_participantes');
        localStorage.setItem('participantes', JSON.stringify(eventos));
    }

    gerarRegistrosAleatorios(){
        let registros = [
            {
            "id_municipio": "1100015",
            "nome": "Adao",
            "quantidade_nascimentos_ate_2010": "36"
          }, {
            "id_municipio": "1100015",
            "nome": "Adelina",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Adelson",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Ademar",
            "quantidade_nascimentos_ate_2010": "19"
          }, {
            "id_municipio": "1100015",
            "nome": "Ademir",
            "quantidade_nascimentos_ate_2010": "46"
          }, {
            "id_municipio": "1100015",
            "nome": "Adenilson",
            "quantidade_nascimentos_ate_2010": "12"
          }, {
            "id_municipio": "1100015",
            "nome": "Adilson",
            "quantidade_nascimentos_ate_2010": "31"
          }, {
            "id_municipio": "1100015",
            "nome": "Adriana",
            "quantidade_nascimentos_ate_2010": "60"
          }, {
            "id_municipio": "1100015",
            "nome": "Adriano",
            "quantidade_nascimentos_ate_2010": "39"
          }, {
            "id_municipio": "1100015",
            "nome": "Adriele",
            "quantidade_nascimentos_ate_2010": "13"
          }, {
            "id_municipio": "1100015",
            "nome": "Afonso",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Agnaldo",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Aguinaldo",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Ailton",
            "quantidade_nascimentos_ate_2010": "25"
          }, {
            "id_municipio": "1100015",
            "nome": "Alan",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Alessandra",
            "quantidade_nascimentos_ate_2010": "17"
          }, {
            "id_municipio": "1100015",
            "nome": "Alessandro",
            "quantidade_nascimentos_ate_2010": "18"
          }, {
            "id_municipio": "1100015",
            "nome": "Alex",
            "quantidade_nascimentos_ate_2010": "37"
          }, {
            "id_municipio": "1100015",
            "nome": "Alexandra",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Alexandre",
            "quantidade_nascimentos_ate_2010": "33"
          }, {
            "id_municipio": "1100015",
            "nome": "Alexandro",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Alfredo",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Alice",
            "quantidade_nascimentos_ate_2010": "19"
          }, {
            "id_municipio": "1100015",
            "nome": "Aline",
            "quantidade_nascimentos_ate_2010": "77"
          }, {
            "id_municipio": "1100015",
            "nome": "Alisson",
            "quantidade_nascimentos_ate_2010": "19"
          }, {
            "id_municipio": "1100015",
            "nome": "Almir",
            "quantidade_nascimentos_ate_2010": "14"
          }, {
            "id_municipio": "1100015",
            "nome": "Altair",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Alzira",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Amanda",
            "quantidade_nascimentos_ate_2010": "51"
          }, {
            "id_municipio": "1100015",
            "nome": "Amarildo",
            "quantidade_nascimentos_ate_2010": "13"
          }, {
            "id_municipio": "1100015",
            "nome": "Ana",
            "quantidade_nascimentos_ate_2010": "300"
          }, {
            "id_municipio": "1100015",
            "nome": "Anderson",
            "quantidade_nascimentos_ate_2010": "67"
          }, {
            "id_municipio": "1100015",
            "nome": "Andre",
            "quantidade_nascimentos_ate_2010": "62"
          }, {
            "id_municipio": "1100015",
            "nome": "Andreia",
            "quantidade_nascimentos_ate_2010": "53"
          }, {
            "id_municipio": "1100015",
            "nome": "Andressa",
            "quantidade_nascimentos_ate_2010": "35"
          }, {
            "id_municipio": "1100015",
            "nome": "Andriele",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Angela",
            "quantidade_nascimentos_ate_2010": "29"
          }, {
            "id_municipio": "1100015",
            "nome": "Angelica",
            "quantidade_nascimentos_ate_2010": "42"
          }, {
            "id_municipio": "1100015",
            "nome": "Angelina",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Angelo",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Anita",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Antonia",
            "quantidade_nascimentos_ate_2010": "37"
          }, {
            "id_municipio": "1100015",
            "nome": "Antonio",
            "quantidade_nascimentos_ate_2010": "270"
          }, {
            "id_municipio": "1100015",
            "nome": "Aparecida",
            "quantidade_nascimentos_ate_2010": "45"
          }, {
            "id_municipio": "1100015",
            "nome": "Aparecido",
            "quantidade_nascimentos_ate_2010": "31"
          }, {
            "id_municipio": "1100015",
            "nome": "Arlindo",
            "quantidade_nascimentos_ate_2010": "12"
          }, {
            "id_municipio": "1100015",
            "nome": "Arnaldo",
            "quantidade_nascimentos_ate_2010": "13"
          }, {
            "id_municipio": "1100015",
            "nome": "Artur",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Barbara",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Beatriz",
            "quantidade_nascimentos_ate_2010": "24"
          }, {
            "id_municipio": "1100015",
            "nome": "Benedita",
            "quantidade_nascimentos_ate_2010": "12"
          }, {
            "id_municipio": "1100015",
            "nome": "Benedito",
            "quantidade_nascimentos_ate_2010": "23"
          }, {
            "id_municipio": "1100015",
            "nome": "Bruna",
            "quantidade_nascimentos_ate_2010": "43"
          }, {
            "id_municipio": "1100015",
            "nome": "Bruno",
            "quantidade_nascimentos_ate_2010": "81"
          }, {
            "id_municipio": "1100015",
            "nome": "Caio",
            "quantidade_nascimentos_ate_2010": "14"
          }, {
            "id_municipio": "1100015",
            "nome": "Camila",
            "quantidade_nascimentos_ate_2010": "58"
          }, {
            "id_municipio": "1100015",
            "nome": "Carla",
            "quantidade_nascimentos_ate_2010": "17"
          }, {
            "id_municipio": "1100015",
            "nome": "Carlos",
            "quantidade_nascimentos_ate_2010": "143"
          }, {
            "id_municipio": "1100015",
            "nome": "Carolaine",
            "quantidade_nascimentos_ate_2010": "14"
          }, {
            "id_municipio": "1100015",
            "nome": "Caroline",
            "quantidade_nascimentos_ate_2010": "18"
          }, {
            "id_municipio": "1100015",
            "nome": "Cecilia",
            "quantidade_nascimentos_ate_2010": "12"
          }, {
            "id_municipio": "1100015",
            "nome": "Celia",
            "quantidade_nascimentos_ate_2010": "32"
          }, {
            "id_municipio": "1100015",
            "nome": "Celio",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Celma",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Celso",
            "quantidade_nascimentos_ate_2010": "22"
          }, {
            "id_municipio": "1100015",
            "nome": "Cicero",
            "quantidade_nascimentos_ate_2010": "25"
          }, {
            "id_municipio": "1100015",
            "nome": "Cintia",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Clarice",
            "quantidade_nascimentos_ate_2010": "18"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudemir",
            "quantidade_nascimentos_ate_2010": "26"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudete",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudia",
            "quantidade_nascimentos_ate_2010": "22"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudinei",
            "quantidade_nascimentos_ate_2010": "36"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudineia",
            "quantidade_nascimentos_ate_2010": "17"
          }, {
            "id_municipio": "1100015",
            "nome": "Claudio",
            "quantidade_nascimentos_ate_2010": "37"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleber",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleide",
            "quantidade_nascimentos_ate_2010": "25"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleiton",
            "quantidade_nascimentos_ate_2010": "19"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleonice",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleusa",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleuza",
            "quantidade_nascimentos_ate_2010": "21"
          }, {
            "id_municipio": "1100015",
            "nome": "Cleverson",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Clovis",
            "quantidade_nascimentos_ate_2010": "12"
          }, {
            "id_municipio": "1100015",
            "nome": "Creuza",
            "quantidade_nascimentos_ate_2010": "15"
          }, {
            "id_municipio": "1100015",
            "nome": "Cristiane",
            "quantidade_nascimentos_ate_2010": "31"
          }, {
            "id_municipio": "1100015",
            "nome": "Cristiano",
            "quantidade_nascimentos_ate_2010": "18"
          }, {
            "id_municipio": "1100015",
            "nome": "Cristina",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Daiane",
            "quantidade_nascimentos_ate_2010": "53"
          }, {
            "id_municipio": "1100015",
            "nome": "Daniel",
            "quantidade_nascimentos_ate_2010": "81"
          }, {
            "id_municipio": "1100015",
            "nome": "Daniela",
            "quantidade_nascimentos_ate_2010": "25"
          }, {
            "id_municipio": "1100015",
            "nome": "Daniele",
            "quantidade_nascimentos_ate_2010": "26"
          }, {
            "id_municipio": "1100015",
            "nome": "Danieli",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Danilo",
            "quantidade_nascimentos_ate_2010": "19"
          }, {
            "id_municipio": "1100015",
            "nome": "Darci",
            "quantidade_nascimentos_ate_2010": "17"
          }, {
            "id_municipio": "1100015",
            "nome": "Davi",
            "quantidade_nascimentos_ate_2010": "24"
          }, {
            "id_municipio": "1100015",
            "nome": "David",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Debora",
            "quantidade_nascimentos_ate_2010": "41"
          }, {
            "id_municipio": "1100015",
            "nome": "Denilson",
            "quantidade_nascimentos_ate_2010": "10"
          }, {
            "id_municipio": "1100015",
            "nome": "Denise",
            "quantidade_nascimentos_ate_2010": "16"
          }, {
            "id_municipio": "1100015",
            "nome": "Diana",
            "quantidade_nascimentos_ate_2010": "11"
          }, {
            "id_municipio": "1100015",
            "nome": "Diego",
            "quantidade_nascimentos_ate_2010": "57"
          }];
        tmp_participantes = new Array();
        registros.forEach((r)=>{
                let evento = {
                    nome: r.nome,
                    idade: Math.floor(Math.random() *60) + 18 
                }
                tmp_participantes.push(evento);
                qtdeRegistros.innerHTML = tmp_participantes.length;
        });
        this.transferirTmpParticipante();
    }

    contarRegistros(){
        return tmp_participantes.length;
    }
}

function armazenarDado(chave, valor)
{
    localStorage.setItem(chave, valor);
}