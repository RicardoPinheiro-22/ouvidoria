var esconder = document.querySelector('#esconder')
var ver = document.querySelector('#mostrar')


esconder.addEventListener('click', function(){
    var senha = document.querySelector('#senha')
    var pass = document.querySelector('.mostrar')
    var texto = document.querySelector('.esconder')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }

    pass.style.display = "block"
    texto.style.display = "none"
})

ver.addEventListener('click', function(){
    var senha = document.querySelector('#senha')
    var pass = document.querySelector('.mostrar')
    var texto = document.querySelector('.esconder')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }

    pass.style.display = "none"
    texto.style.display = "block"
})
