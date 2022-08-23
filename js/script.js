




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



// Teste Dark / Light Mode

const body = document.getElementsByTagName('body')

