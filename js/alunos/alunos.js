'use strict'

export async function listAllStudents() {
    const url = "https://lion-school-phbo.onrender.com/alunos"
    
    const response = await fetch(url)

    const allStudents = await response.json()
    return allStudents
}

export async function listAllStudentsByIdClass(idClass) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${idClass}`

    const response = await fetch(url)

    const allStudents = await response.json()
    console.log(allStudents)
    return allStudents
}

export async function studentData(idStudent) {
    const url = `https://lion-school-phbo.onrender.com/alunos/${idStudent}`

    const response = await fetch(url)

    const dataStudent = await response.json()
    console.log(dataStudent)
    return dataStudent
}

studentData(1)