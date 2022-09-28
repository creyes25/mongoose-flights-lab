import { Router } from 'express'
import * as MealsCtrl from '../controllers/meals.js'

const router = Router()

// GET - meals/new
router.get('/new', MealsCtrl.new)

// POST - meals
router.post('/', MealsCtrl.create)

export {
  router
}
