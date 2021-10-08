function enviar(){
    const id_email = document.getElementById("email")
    const id_senha = document.getElementById("senha")
    
    if( id_email.value === "" || id_senha.value === ""){
        alert("Preencha os campos corretamente")
    }
    else{
        alert("Salvo com sucesso")
    }
}