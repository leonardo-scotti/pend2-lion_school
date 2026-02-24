'use strict'
import { listAllStudents } from './alunos/alunos.js'
import { listAllCourses } from './cursos/cursos.js'

document.getElementById("btnDev").addEventListener("click", (event) => {
    showSection("students")
    createDomStudents()
})

document.getElementById("btnRedes").addEventListener("click", (event) => {
    showSection("students")
})

function createHome() {
    const main = document.getElementById('main')

    const home = document.createElement('section')
    home.classList.add('home')
    main.appendChild(home)

    const slogan = document.createElement('div')
    slogan.classList.add('slogan')
    home.appendChild(slogan)

    const spanCurso = document.createElement('span')
    spanCurso.textContent = 'curso'

    const textSlogan = document.createElement('p')
    textSlogan.textContent = `Escolha um`
    const restTextSlogan = 'para gerenciar'
    textSlogan.append(spanCurso, restTextSlogan)

    const imgSlogan = document.createElement('img')
    imgSlogan.src = './assets/devices.svg'
    slogan.appendChild(imgSlogan)

    const imgMain = document.createElement('img')
    imgMain.src = './assets/studant.svg'
    main.appendChild(imgMain)
}

function createCardCourse() {
    
}

function createDomStudents() {
    const tittle = document.getElementById("tittle")

}

listAllStudents()
createHome