import { Router } from "express";
import {createCourse,getCoursesByTeacher,getCoursesByStudent,assignStudentToCourse,editCourse,deleteCourse} from "./course.controller.js";
import { validateCourse } from "../middlewares/course-validator.js";

const router = Router()


router.post("/courses", validateCourse, createCourse)

router.put("/editcourses", validateCourse, editCourse)

router.get("/courses/teacher", getCoursesByTeacher)

router.get("/courses/student", getCoursesByStudent)

router.post("/courses/assign", assignStudentToCourse)

router.delete("/deletecourses", deleteCourse)

export default router