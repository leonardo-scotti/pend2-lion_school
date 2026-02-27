'use strict'

export async function listAllCourses() {
    try {
        const url = `https://lion-school-backend.onrender.com/cursos`

        const response = await fetch(url)

        const allCourses = await response.json()
        // console.log(allCourses)
        return allCourses
    } catch (error) {
        return false
    }
}

listAllCourses()
