var menu = document.querySelector('.c-nav-toggle__menu');

function abrirMenu() {
    setTopo();
    menu.style.display = 'flex';
    $(window).bind('scroll', setTopo);
}

function fecharMenu() {
    menu.style.display = 'none';
}
function setTopo() {
    $(window).scrollTop(0);
}

function cadastrarEmail()
{
    let email = document.querySelector('#email');
    alert(`Email ${email.value} cadastrado com sucesso!`);
}

function logar()
{
    let email = document.querySelector('#email');
    let senha = document.querySelector('#password');
    alert('Usuário logado com sucesso');

    if(senha.lenght > 0)
    {
        deslogar();
        window.localStorage.setItem('login', email);
    }
}

function deslogar()
{
    window.localStorage.removeItem('login');
}

