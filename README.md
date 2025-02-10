

### Users

/api/adminalumnos/v1/user/userfindUser/:uid
/api/adminalumnos/v1/user/
/api/adminalumnos/v1/user/deleteUser/:uid
/api/adminalumnos/v1/user/updatePassword/:uid
/api/adminalumnos/v1/user/updateUser/:uid
/api/adminalumnos/v1/user/assignCourse/:uid
/api/adminalumnos/v1/user/createCourse
/api/adminalumnos/v1/user/updateCourse/:courseId
/api/adminalumnos/v1/user/deleteCourse/:courseId



{
  "name": "Juan",
  "surname": "Pérez",
  "username": "juanperez123",
  "email": "juanperez@example.com",
  "password": "SecurePass123!",
  "profilePicture": "https://example.com/profile.jpg",
  "phone": "12345678",
  "role": "STUDENT_ROLE",
  "status": true,
  "assignedCourses": ["60d21b4667d0d8992e610c85", "60d21b5267d0d8992e610c86"]
}

### Courses

/api/adminalumnos/v1/course/courses
/api/adminalumnos/v1/course/editcourses
/api/adminalumnos/v1/course/courses/teacher
/api/adminalumnos/v1/course/courses/student
/api/adminalumnos/v1/course/courses/assign
/api/adminalumnos/v1/course/deletecourses

{
  "title": "Matemáticas Avanzadas",
  "description": "Este curso cubre álgebra, cálculo y trigonometría.",
  "teacher": "60d21b4667d0d8992e610c85",
  "students": ["60d21b5267d0d8992e610c86", "60d21b6367d0d8992e610c87"]
}