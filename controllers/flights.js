import { Flight } from "../models/flight.js"


function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function createFlight(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    flights
  })
  res.send('respond with a resource')
}


export {
  index,
  newFlight as new,
  createFlight as create
}