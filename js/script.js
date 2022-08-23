




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

// const body = document.getElementsByTagName('body')
// const switchButton = document.getElementById('switch-mode')


// switchButton.addEventListener("click", lightMode)

// function darkMode () {
//     //document.body.classList.remove('.light')
// }

// function lightMode () {
//     document.body.classList.add('light')
// }