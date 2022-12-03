import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectBdToServer } from './config/db'
import { userRouter } from './routes/users'
import { transactionsRouter } from './routes/transactions'
import { accountRouter } from './routes/account'

export const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

conectBdToServer()

app.use('/user', userRouter)
app.use('/account', accountRouter)
app.use('/transaction', transactionsRouter)
app.use('/', (req, res) => res.send('API NG challenge Ramiro Mares de Oliveira'))