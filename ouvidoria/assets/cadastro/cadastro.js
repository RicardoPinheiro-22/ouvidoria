function verificarSenha(){
    var s1 = document.querySelector("#pass1")
    var s2 = document.querySelector("#pass2")
    var mensagem = document.querySelector(".mensagem")
    a = String(s1.value)
    b = String(s2.value)

    if(a == b && s1.value.length > 7){
        s1.style.border = "solid 1px rgb(26, 255, 0)"
        s2.style.border = "solid 1px rgb(26, 255, 0)"
        mensagem.style.display = "none"
    }else{
        s1.style.border = "solid 1px red"
        s2.style.border = "solid 1px red"
        mensagem.style.display = "block"
        mensagem.style.color = "red"
    }
}