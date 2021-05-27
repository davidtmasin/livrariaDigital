
function welcome() {

    let userName = document.getElementById('userName').value
    let userPassword = document.getElementById('userPassword').value
    let userList = ['David', 'Atila', 'Raphael', 'Luis']

    if (!userName || !userPassword) {
        alert('Você não digitou o seu nome ou sua senha, favor, faça isto antes de continuar.')
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
            alert("Este usuário não existe em nossa base de dados.");
            document.getElementById('userName').value = ""
            document.getElementById('userPassword').value = ""
        }
    }
}
