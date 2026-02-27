'use strict'

export async function listAllStudents() {
    try {
        const url = `https://lion-school-backend.onrender.com/alunos`

        const response = await fetch(url)

        const allStudents = await response.json()

        return allStudents
    } catch (error) {
        return false
    }
}

export async function listAllStudentsByIdClass(idClass) {
    try {
        const url = `https://lion-school-backend.onrender.com/alunos?curso_id=${idClass}`

        const response = await fetch(url)

        const allStudents = await response.json()
        console.log(allStudents)
        return allStudents
    } catch (error) {
        return false
    }
}

export async function studentData(idStudent) {
    try {
        const url = `https://lion-school-backend.onrender.com/alunos/${idStudent}`

        const response = await fetch(url)

        const dataStudent = await response.json()
        
        return dataStudent
    } catch (error) {
        return false
    }
}

listAllStudentsByIdClass(1)