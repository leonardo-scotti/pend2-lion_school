'use strict'
import { listAllStudents, listAllStudentsByIdClass } from './alunos/alunos.js'
import { listAllCourses } from './cursos/cursos.js'

document.getElementById('logo').addEventListener('click', () => {
    createHome()
})

// document.getElementById("btnDev").addEventListener("click", (event) => {
//     showSection("students")
//     createDomStudents()
// })

// document.getElementById("btnRedes").addEventListener("click", (event) => {
//     showSection("students")
// })

async function createHome() {
    try {
        const cardCourses = await createCardCourse()

        const main = document.getElementById('main')
        main.replaceChildren()

        const home = document.createElement('section')
        home.id = 'home'
        main.appendChild(home)

        const slogan = document.createElement('div')
        slogan.classList.add('slogan')
        home.appendChild(slogan)

        const spanCurso = document.createElement('span')
        spanCurso.textContent = 'curso '

        const textSlogan = document.createElement('p')
        textSlogan.textContent = `Escolha um `
        const restTextSlogan = 'para gerenciar'
        textSlogan.append(spanCurso, restTextSlogan)
        slogan.appendChild(textSlogan)

        const imgSlogan = document.createElement('img')
        imgSlogan.src = './assets/devices.svg'
        slogan.appendChild(imgSlogan)

        const imgMain = document.createElement('img')
        imgMain.src = './assets/studant.svg'
        home.appendChild(imgMain)

        home.appendChild(cardCourses)
    } catch (error) {

    }

}

async function createCardCourse() {
    try {
        const classes = document.createElement('div')
        classes.classList.add('classes')

        const allCourses = await listAllCourses()

        allCourses.forEach(course => {
            const card = document.createElement('a')
            card.classList.add('class')

            const img = document.createElement('img')
            if (course.sigla == 'DS') {
                img.src = './assets/dev.svg'
            } else {
                img.src = './assets/redes.svg'
            }

            const nameCourse = document.createElement('span')
            nameCourse.textContent = course.sigla

            card.append(img, nameCourse)
            classes.appendChild(card)

            card.addEventListener('click', () => {
                createStudentsClass(course)
            })
        });

        return classes
    } catch (error) {
        console.log("API fora do ar")
    }

}

async function createStudentsClass(course) {
    const main = document.getElementById('main')
    main.replaceChildren()

    const students = document.createElement('section')
    students.id = 'students'
    main.appendChild(students)

    const tittle = document.createElement('h1')
    tittle.textContent = course.nome
    students.appendChild(tittle)

    const cards = await createCardsStudents(parseInt(course.id))
    students.appendChild(cards)
    console.log(course)
    console.log(tittle)
    console.log(cards)

}

async function createCardsStudents(id) {
    const cardsStudents = document.createElement('div')
    cardsStudents.classList.add('cards-students')
    cardsStudents.id = 'cards-students'

    const studentsByCourse = await listAllStudentsByIdClass(id)

    studentsByCourse.forEach(student => {
        const cardStudent = document.createElement('a')
        cardStudent.classList.add('card-student')

        const profile = document.createElement('div')
        profile.classList.add('profile')
        cardStudent.appendChild(profile)

        const img = document.createElement('img')
        img.src = student.foto
        profile.appendChild(img)

        const name = document.createElement('p')
        name.textContent = String(student.nome).toUpperCase()
        cardStudent.appendChild(name)

        cardStudent.addEventListener('click', () => {
            createAreaStudent(student)
        })

        cardsStudents.appendChild(cardStudent)
    })

    return cardsStudents
}

async function createAreaStudent(student) {
    const main = document.getElementById('main')
    main.replaceChildren()

    const secStudent = document.createElement('section')
    secStudent.id = 'student'
    main.appendChild(secStudent)

    const user = document.createElement('div')
    user.classList.add('user')
    secStudent.appendChild(user)

    const img = document.createElement('img')
    img.src = student.foto
    user.appendChild(img)

    const nameUser = document.getElementById('p')
    nameUser.textContent = String(student.nome).toUpperCase()
    user.appendChild(nameUser)

    const performance = document.createElement('div')
    performance.classList.add('performance')
    secStudent.appendChild(performance)

    
}

listAllStudents()
createHome()