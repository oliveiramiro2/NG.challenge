import { Router } from "express";
import { AccountController } from "../controller/accountController";
import { TransactionController } from "../controller/TransactionController";
import { userController } from "../controller/userController";
import { Transactions } from "../entity/Transactions";

export const transactionsRouter = Router()
const transactionsCtrl = new TransactionController()
const accountCtrl = new AccountController()
const userCtrl = new userController()

transactionsRouter.post('/', async (req, res) => {
  const { value, username } = req.body
  // recover user by username
  const userByName = await userCtrl.recoverByName(username)
  // recover user by id
  const user = await userCtrl.recoverUserById(userByName.id)
  // recover your account from user id
  const account = await accountCtrl.recoverAccountById(user.account.id)

  if(account){
    if(value !== 0){
      const checkDebit = account.balance + value >= 0 ? true : false
      if(checkDebit){
        const transaction = new Transactions(value, new Date(), account)
        const newTransaction = await transactionsCtrl.update(transaction)
        const saveAccount = await accountCtrl.update(account, value)
        res.json([newTransaction, saveAccount])
      }else{
        res.status(401).json({mesage: "The debit is not possible your balance is too small"})
      }
    }else{
      res.status(404).json({mesage: "The value cannot be 0"})
    }
  }else{
      res.status(404).json({mesage: "User not found"})
    }
})

transactionsRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await userCtrl.recoverUserById(parseInt(id))
  const account = await accountCtrl.recoverAccountById(user.account.id)

  if(account && user){
    const transactions = await accountCtrl.recoverAccountWithTransactions(account.id)
    res.json(transactions.transaction)
  }else{
    res.status(404).json({mesage: "User not found"})
  }
})