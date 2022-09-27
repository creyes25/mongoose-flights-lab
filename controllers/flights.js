import { Flight } from "../models/flight.js"


function newFlight(req, res) {
  const newFLight = new Flight()
  console.log(newFLight)
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function createFlight(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}



export {
  index,
  newFlight as new,
  createFlight as create
}