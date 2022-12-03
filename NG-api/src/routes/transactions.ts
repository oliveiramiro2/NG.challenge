import { Router } from "express";
import { AccountController } from "../controller/accountController";
import { TransactionController } from "../controller/TransactionController";
import { userController } from "../controller/userController";
import { Transactions } from "../entity/Transactions";

export const transactionsRouter = Router()
const transactionsCtrl = new TransactionController()
const accountCtrl = new AccountController()
const userCtrl = new userController()

transactionsRouter.post('/:id', async (req, res) => {
  const { value } = req.body
  const { id } = req.params
  // recover user from id
  const user = await userCtrl.recoverUserById(parseInt(id))
  // recover your account from user id
  const account = await accountCtrl.recoverAccountById(user.account.id)

  if(account && user){
    if(value !== 0){
      const transaction = new Transactions(value, new Date(), account)
      const newTransaction = await transactionsCtrl.update(transaction)
      const saveAccount = await accountCtrl.update(account, value)
      res.json([newTransaction, saveAccount])
    }else{
      res.status(404).json({mesage: "The value cannot be 0"})
    }
  }else{
      res.status(404).json({mesage: "User not found"})
    }
})

transactionsRouter.get('/', async (req, res) => {
  const transactions = await transactionsCtrl.recoverTransactions()
  res.json(transactions)
})