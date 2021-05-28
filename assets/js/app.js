
function welcome() {

    let userName = document.getElementById('userName').value
    let userPassword = document.getElementById('userPassword').value
    let userList = ['David', 'Atila', 'Raphael', 'Luis', 'Xablau']

    if (!userName || !userPassword) {
        alert('Usuário e/ou senha não informados!')
        if (!userName) {
            document.getElementById('userName').focus()
        } else {
            document.getElementById('userPassword').focus()
        }
    }
    else {
        if (userList.indexOf(userName) != -1) {
            console.log("Usuário cadastrado!");
            alert('Saudações, ' + userName + '.')
            window.location.href = "./assets/page/cadastroLivro.html";
            document.getElementById('userName').value = ""
            document.getElementById('userPassword').value = ""
        }
        else {
            alert("Usuário não cadastrado!");
            document.getElementById('userName').value = ""
            document.getElementById('userPassword').value = ""
            document.getElementById('userName').focus()
        }
    }
}

function registerUser() {
    window.location.href = "./assets/page/cadastroUsuario.html";
}

function createdUser() {

    let userName = document.getElementById('userName').value
    let userPassword = document.getElementById('userPassword').value

    if (!userName || !userPassword) {
        alert('Todos os campos são obrigatório!')
        if (!userName) {
            document.getElementById('userName').focus()
        } else {
            document.getElementById('userPassword').focus()
        }
    } else {
        alert('Usuário criado com sucesso! Efetue o seu login.')
        window.location.href = "../../index.html";

    }

}


// Criando a funcionalidade do sidebard
function openNav() {
    document.getElementById("opened").style.width = "250px";
    document.getElementById("collapsed").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("opened").style.width = "0";
    document.getElementById("collapsed").style.marginLeft = "0";
}