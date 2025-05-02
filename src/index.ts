import express from "express";
import morgan from "morgan"
import cors from "cors"
const app = express()
const port = process.env.PORT ?? "9001"

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World fo Typescript')
})

app.listen(port, () => {
  console.log(`Budgeter app listening on port ${port}`)
})