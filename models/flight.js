import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    minlength: 10,
    maxlength: 9999
  },
  departs: {
    type: Date,
    default: oneYearFromNow()    
  },
}, {
  timestamps: true
})

function oneYearFromNow() {
  const today = new Date()
  today.setFullYear(today.getFullYear()  + 1)
  return today
}

oneYearFromNow()
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}