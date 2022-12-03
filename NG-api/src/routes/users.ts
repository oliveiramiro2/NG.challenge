import { Router } from "express"
import { AccountController } from "../controller/accountController"
import { TransactionController } from "../controller/TransactionController"
import { userController } from "../controller/userController"
import { Accounts } from "../entity/Accounts"
import { Transactions } from "../entity/Transactions"
import { Users } from "../entity/Users"

export const userRouter = Router()
const userCtrl = new userController()
const accountCtrl = new AccountController()
const transactionsCtrl = new TransactionController()

userRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  const account = new Accounts(100)
  const saveAccount = await accountCtrl.create(account)

  const transaction = new Transactions(100, new Date(), saveAccount)
  const saveTransaction = await transactionsCtrl.update(transaction)

  const user = new Users(username, password, saveAccount)
  const saveUser = await userCtrl.save(user)

  res.json([saveUser, saveTransaction])
})

userRouter.get('/', async (req, res) => {
  const allUsers = await userCtrl.recoverAllUsers()
  res.json(allUsers)
})