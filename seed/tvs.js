const db = require('../db')
const { TV } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tvs = [
        {
        name : 'yeet yeet big screen',
        features : 'best darn tv you will buy',
        size : 55,
        brand: 'Samsung',
        price : 1000
          },
        {
        name : 'yeet yeet smaller screen',
        features : 'ok tv you will buy',
        size : 42,
        brand: 'Samsung',
        price : 500
          },
          
    ]

    await TV.insertMany(tvs)
    console.log('inserted TV!')
}

const run = async () => {
    await main()
    db.close()
}

run()
