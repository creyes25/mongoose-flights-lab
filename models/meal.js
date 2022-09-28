import mongoose from "mongoose"

const Schema = mongoose.Schema

const mealShema = new Schema({
  name: String,
})

const Meal = mongoose.model('Meal', mealShema)

export {
  Meal
}