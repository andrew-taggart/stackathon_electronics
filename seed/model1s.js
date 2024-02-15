const db = require('../db')
const { Model1 } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const model1s = [
        {
            name: 'enter ',
            location: 'enter',
            url: 'enter'
          },
          {
            name: 'enter ',
            location: 'enter',
            url: 'enter'
          }
    ]

    await Model1.insertMany(model1s)
    console.log('inserted publishers!')
}

const run = async () => {
    await main()
    db.close()
}

run()