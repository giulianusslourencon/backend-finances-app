import 'dotenv/config'

import express from 'express'

import cors from 'cors'

import { router } from './router'

import '@server/external/repositories/mongodb/MongoConnection'

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

export { app }
