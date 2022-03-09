// var form = document.getElementById("form-contato");

// if (form.addEventListener) {                   
//     form.addEventListener("submit", ValidarFormulario);
// } else if (form.attachEvent) {                  
//     form.attachEvent("onsubmit", ValidarFormulario);
// }

function ValidarFormulario() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    var contErro = 0;

    caixa_nome = document.querySelector('.msg-nome');
    caixa_email = document.querySelector('.msg-email');

    if (name == '') {
        caixa_nome.innerHTML = "Favor preencher o Nome";
		caixa_nome.style.display = 'block';
        contErro += 1;
    }
    
    if (email == '') {
        caixa_email.innerHTML = "Favor preencher o E-mail";
		caixa_email.style.display = 'block';
        contErro += 1;
    }

    if(contErro > 0){
		evt.preventDefault();
	} else {
        caixa_nome.style.display = 'none';
        caixa_email.style.display = 'none';
    }
}


function buttonValidadeForm(form) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    var contErro = 0;

    caixa_nome = document.querySelector('.msg-nome');
    caixa_email = document.querySelector('.msg-email');

    if(name == "") {
        caixa_nome.innerHTML = "Favor preencher seu nome!";
        caixa_nome.style.color = "Red";
        caixa_nome.style.display = 'block';
        contErro += 1;
    }
    
    if(email == "") {
        caixa_email.innerHTML = "Favor preencher seu email!";
        caixa_email.style.color = "Red";
        caixa_email.style.display = 'block';
        contErro += 1;
    }
    
    if(contErro == 0){
        $('#download-upload-planilha').css('display', 'block');
        $('#form-cadastro').css('display', 'none');
        form.submit();
    }
    else {
        return false;
    }    
}
