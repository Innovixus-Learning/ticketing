import express from 'express'
import { json } from 'body-parser'
const app = express()

app.use(json())

app.listen(4000, () => {
    console.log('auth app Listening on port 4000')
})