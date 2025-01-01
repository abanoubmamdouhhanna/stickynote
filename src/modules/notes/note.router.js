import { Router } from "express";
import * as noteController from './controller/note.js'
const router=Router()

router.get('/',noteController.getNotes)
router.post('/create',noteController.createtNote)

export default router