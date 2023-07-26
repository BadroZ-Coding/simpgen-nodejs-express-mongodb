const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { port, urlBDD } = require('./src/config.json')
const { name } = require('./package.json')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))

/** write 
 * code 
 * here
 */

mongoose.Promise = global.Promise
mongoose.connect(`${urlBDD}/${name}`, (err) => {
    if (err) {
        console.log("Connection to MongoDB server failed !")
    } else {
        console.log("The connection to the MongoDB server is a success !")
    }
})


app.listen(port, () => {
    console.log(`Server listener on the port ${port}`)
})