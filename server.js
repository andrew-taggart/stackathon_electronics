const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001
// const Controller1 = require('./controllers/Controller1')
const computerController = require('./controllers/computerController')
const TvController = require('./controllers/tvController')

// import Smart Home controllers
const SmartHomeController = require('./controllers/smartHomeController')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('welcome to our landing page!'))

app.get('/tv', TvController.getAllTvs)

app.get('/tv/:id', TvController.getTvById)

app.post('/tv', TvController.createTv)

app.put('/tv/:id', TvController.updateTv)

app.delete('/tv/:id', TvController.deleteTv)

// Smart Home Routes
app.get('/smarthome', SmartHomeController.getAllSmartHomes)
app.get('/smarthome/:id', SmartHomeController.getAllSmartHomes)
app.post('/smarthome', SmartHomeController.createSmartHome)
app.put('/smarthome/:id', SmartHomeController.updateSmartHome)
app.delete('/plants/:id', SmartHomeController.deleteSmartHome)




//\\\\\\\\\\\\\\[==== Start =|=  Denesh - Service scripts =======]||||||||||||

app.get('/computers',computerController.getAllComputer)

app.get('/computers/:id',computerController.getComputersById)

app.get('/computers/brands/:name',computerController.getComputersByBrandName)

// app.get('/computers?brand=value1&type=value2',computerController.getComputersByBrandName)

app.post('/computers',computerController.createComputer)

app.put('/computers/:id',computerController.updateComputer)

app.delete('/computers/:id',computerController.deleteComputer)
//\\\\\\\\\\\\\\[==== End =|=  Denesh - Service scripts =======]||||||||||||