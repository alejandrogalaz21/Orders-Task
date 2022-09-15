import './env'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import axios from 'axios'
// Create express app
const app = express()
// App Host and Port
const APP_PORT =
  (process.env.NODE_ENV === 'test'
    ? process.env.TEST_APP_PORT
    : process.env.APP_PORT) ||
  process.env.PORT ||
  '3000'
const APP_HOST = process.env.APP_HOST || '127.0.0.1'

// set app info
const title = (app.locals.title = process.env.APP_NAME || 'Task')
const version = (app.locals.version = process.env.APP_VERSION || '0.0.0')
// set host and port
app.set('port', APP_PORT)
app.set('host', APP_HOST)
// makes /foo and /Foo the same
app.set('case sensitive routing', false)
// makes /foo and /foo/ the same
app.set('strict routing', false)
// # of spaces to indent prettified json
app.set('json spaces', 2)
// setup all the config of the app
app.use(cors())
app.use(helmet())
app.use(compression())
// app.use(morgan('tiny', { stream: logStream }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://mf-public-demo-files.s3.amazonaws.com/pos.json'
    )
    const { purchaseOrders } = data
    const vendorsAll = purchaseOrders.map(order => {
      const r = order.id.split('-')
      return r[0]
    })
    const vendors = [...new Set(vendorsAll)].sort()
    const filterOrders = vendors.map(vendor => {
      return {
        [vendor]: [
          purchaseOrders
            .filter(order => vendor === order.id.split('-')[0])
            .sort((a, b) => a.cost - b.cost)
        ]
      }
    })
    const r = { filterOrders, vendors, totalOfOrders: purchaseOrders.length }
    res.status(200).json(r)
  } catch (error) {
    if (error.response) {
      throw new Error('The client was given an error response')
    } else if (error.request) {
      throw new Error(
        'The client never received a response, and the request was never left'
      )
    } else {
      throw new Error('Oops something went wrong')
    }
  }
})

app.listen(app.get('port'), app.get('host'), async () => {
  console.log(`${title}, V:${version}`)
  console.log(
    `${title} started at http://${app.get('host')}:${app.get('port')}`
  )
})

export default app
