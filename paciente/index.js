function logar(){
    var login = document.getElementById('login').value;
    if(login == "João Paulo De Azevedo" || login == "745.398.774-10" || login == "74539877410" || login == "João Paulo De Azevedo " || login == " João Paulo De Azevedo "){
        window.location.href = "Laudos/Resultado Hemograma simplificado final 2.pdf"
    }else{
        alert('Nome ou CPF errados, por favor verificar e tentar novamente');
    }

}