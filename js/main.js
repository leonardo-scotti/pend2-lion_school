'use strict'
import { listAllStudents } from './alunos/alunos.js'

document.getElementById("btnDev").addEventListener("click", (event) => {
    showSection("students")
    createDomStudents()
})

document.getElementById("btnRedes").addEventListener("click", (event) => {
    showSection("students")
})

function checkPage() {
    const btnExit = document.getElementById("btnExit")
    const activeSection = document.querySelector("section.active")

    console.log(activeSection)

    if(activeSection.id === "home") {
        btnExit.textContent = "Sair"
    } else {
        btnExit.textContent = "Voltar"
    }

}

function showSection(sectionId) {
    document.querySelector("section").forEach(section => {
        section.classList.remove("active")
    });

    document.getElementById(sectionId).classList.add("active")
}

function createDomStudents() {
    const tittle = document.getElementById("tittle")

}

listAllStudents()
checkPage()