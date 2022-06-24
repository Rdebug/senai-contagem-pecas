# Exercício Proposto

Este projeto busca a criação de um arquivo para  solucionar três questões utilizando lógica de programação e javascript.

As condições a serem atendidas são as seguintes:

**Condição 01**

*Se a peça possuir um peso superior a 100 gramas, pode cadastrar*

**Condição 02**

*Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima
        uma mensagem informando não ter a capacidade suficiente*

**Condição 03**

*Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro*

Para o exercício proposto foi criada uma interface para os testes do código e a visualização lógica utilizada.

Um resumo da lógica abordada para a resulução dessas questões é a seguinte:


```
// Variável para armazenar minha lista de peças
var pecas = 
[
        'peca01',
        'peca02',
        'peca03',
        'peca04',
        'peca05',
        'peca06',
        'peca07',
        'peca08'
];
```

### Solução 01

```
// Variável responsável por armazenar o valor que o usuário digitar
let peso = prompt("Digite o peso da peça")
```


```
// Verificar se o valor informado pelo usuário é um número
if(!isNaN(peso))
{
    // Condição 01 - Se a peça possuir um peso superior a 100 gramas, pode cadastrar
    if(peso > 100)
    {
        // Cadastrar o produto
        console.log('Cadastrado com sucesso');
    }
    else
    {
        // Não cadastrar o produto
        console.log('O peso precisa ser superior a 100 gramas');
    }
}else{
    alert('O valor digitado precisa ser um número')
}
```
### Solução 02

```
// Armazenar na variável a quantidade de peças que está na nossa variável peso
let quantidadePecas = pecas.length;
```

```
// Condição 02 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter a capacidade suficiente
// Verificar se a quantidade de peças é maior que 10
if( quantidadePecas > 10)
{
    // Imprimir mensagem
    console.log('Limite de peças excedido');
}
else
{
    console.log('Peças inseridas na caixa com sucesso!');
}

```

### Solução 03

```
// Armazenar em uma variável o nome da peça digitada pelo usuário
let nomePeca = prompt('Digite o nome da peça a ser cadastrada');
```

```
// Armazenar na variável a quantidade de letras do nome informado pelo usuário
let quantidadeLetrasPeca = nomePeca.length;
```

```
// Condição 03 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro
// Verificar se a quantidade de letras é inferior a 3 caracteres
if( quantidadeLetrasPeca < 3)
{
    // Imprimir mensagem
    console.log('O nome da peça precisa conter mais que 03 caracteres');
}
else
{
    console.log('Nome da peça cadastrada com sucesso!');
}

```