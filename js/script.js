




// Função para abrir GitHub e Linkedin em Aba Separada
const gitButton = document.getElementById('git-button')
const linkedinButton = document.getElementById('linkedin-button')


gitButton.addEventListener("click", abreGit)
linkedinButton.addEventListener("click", abreLinkedin)

function abreGit() {
    window.open("https://github.com/PedroSS11")

}

function abreLinkedin() {
    window.open("https://www.linkedin.com/in/pedrohenriquedev/")
}


// Função para abrir WhatsApp em Aba Separada
const abaWhatsapp = document.getElementById('link-sobre')

abaWhatsapp.addEventListener("click", abreWhats)

function abreWhats() {
    window.open("https://web.whatsapp.com/send?phone=5511950724702")
}


/**
 --------------------------------------


 SEÇÃO AINDA EM TESTE E EM FASE DE PRODUÇÃO !!

----------------------------------------------


// Teste Dark / Light Mode

// const body = document.getElementsByTagName('body')
// const switchButton = document.getElementById('switch-mode')


// switchButton.addEventListener("click", lightMode)

// function darkMode () {
    //document.body.classList.remove('.light')
// }

// function lightMode () {
//     document.body.classList.add('light')
// }


// Criando seção nova para contato

// const contatoButton = document.getElementById('face')
// const textoContato = document.getElementById('texto-contato')

// contatoButton.addEventListener("mouseover", mostraContato)
// contatoButton.addEventListener("mouseout", tiraContato)
// function mostraContato() {
//     document.getElementById('texto-contato').innerText = 'Teste'
// }

// function tiraContato() {
//     document.getElementById('texto-contato').innerText = '/* Passe o mouse no contato de sua preferência 
// }

*/