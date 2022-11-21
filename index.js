function logarPacient(){
    window.location.href="paciente/index.html";
}
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        window.location.href="screens/home/index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}
