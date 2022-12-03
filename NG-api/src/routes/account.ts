import { Router } from "express"
import { AccountController } from "../controller/accountController"
import { TransactionController } from "../controller/TransactionController"
import { Accounts } from "../entity/Accounts"
import { Transactions } from "../entity/Transactions"

export const accountRouter = Router()
const accountCtrl = new AccountController()
const transactionsCtrl = new TransactionController()

accountRouter.get('/create', async (req, res) => {
  const account = new Accounts(100)
  const saveAccount = await accountCtrl.create(account)
  const transaction = new Transactions(100, new Date())
  const saveTransaction = await transactionsCtrl.credit(transaction)
  res.json([saveAccount, saveTransaction])
})

accountRouter.get('/', async (req, res) => {
  const account = await accountCtrl.recoverAccount()
  res.json(account)
})