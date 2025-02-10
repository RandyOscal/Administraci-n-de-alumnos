import { body, validationResult } from 'express-validator';

export const validateCourse = [
  body('titulo')
    .notEmpty().withMessage('El título del curso es obligatorio.')
    .isLength({ max: 100 }).withMessage('El título del curso no puede exceder los 100 caracteres.'),

  body('descripcion')
    .notEmpty().withMessage('La descripcion del curso es obligatoria.'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
