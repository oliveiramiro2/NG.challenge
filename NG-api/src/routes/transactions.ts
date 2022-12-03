import { Router } from "express";
import { AccountController } from "../controller/accountController";
import { TransactionController } from "../controller/TransactionController";
import { Transactions } from "../entity/Transactions";

export const transactionsRouter = Router()
const transactionsCtrl = new TransactionController()
const accountCtrl = new AccountController()

transactionsRouter.post('/:id', async (req, res) => {
  const { value } = req.body
  const { id } = req.params
  const account = await accountCtrl.recoverAccountById(parseInt(id))
  const transaction = new Transactions(value, new Date())
  if(value > 0){
    const newTransaction = await transactionsCtrl.credit(transaction)
    const saveAccount = await accountCtrl.update(account, value)
    res.json([newTransaction, saveAccount])
  }else{
    const newTransaction = await transactionsCtrl.debit(transaction)
    const saveAccount = await accountCtrl.update(account, value)
    res.json([newTransaction, saveAccount])
  }
})

transactionsRouter.get('/', async (req, res) => {
  const transactions = await transactionsCtrl.recoverTransactions()
  res.json(transactions)
})