import { Router } from "express";
import { verify } from "jsonwebtoken";
import { AccountController, IPayloadToken } from "../controller/accountController";
import { TransactionController } from "../controller/transactionController";
import { userController } from "../controller/userController";
import { Transactions } from "../entity/Transactions";

export const transactionsRouter = Router()
const transactionsCtrl = new TransactionController()
const accountCtrl = new AccountController()
const userCtrl = new userController()

transactionsRouter.post('/', async (req, res) => {
  try{
    // recover the user token from check
    const token = String(req.headers.token)
    const payloadToken = verify(token, 'the sun is small')
    const userTaken = await userCtrl.recoverUserById((payloadToken as IPayloadToken).id)

    const { value, username } = req.body

    if(userTaken.username !== username){

      // recover user by username
      const userByName = await userCtrl.recoverByName(username)
      // recover user by id
      const userReceiver = await userCtrl.recoverUserById(userByName.id)
      // recover account from user id
      const accountReceiver = await accountCtrl.recoverAccountById(userReceiver.account.id)
      const accountTaken = await accountCtrl.recoverAccountById(userTaken.account.id)

      const debitedValue = value * -1

      if(accountReceiver){
        if(value > 0){
          const checkDebit = accountTaken.balance + value >= 0 ? true : false
          if(checkDebit){
            const transactionReceiver = new Transactions(value, new Date(), accountReceiver)
            const transactionTaken = new Transactions(debitedValue, new Date(), accountTaken)

            const newTransactionReceiver = await transactionsCtrl.update(transactionReceiver)
            const newTransactionTaken = await transactionsCtrl.update(transactionTaken)

            await accountCtrl.update(accountTaken, debitedValue)
            await accountCtrl.update(accountReceiver, value)

            res.json([newTransactionReceiver, newTransactionTaken])
          }else{
            res.status(401).json({mesage: "The debit is not possible your balance is too small"})
          }
        }else{
          res.status(401).json({mesage: "The value cannot be 0 or smaller"})
        }
      }else{
        res.status(404).json({mesage: "User not found"})
      }
    } else {
      res.status(401).json({mesage: "You don't make a transaction to your self"})
    }
  } catch {
    res.status(401).json({mesage: "The token is not valid"})
  }
})

transactionsRouter.get('/', async (req, res) => {
  try{
    const token = String(req.headers.token)
    const payloadToken = verify(token, 'the sun is small')
    const user = await userCtrl.recoverUserById((payloadToken as IPayloadToken).id)
    const account = await accountCtrl.recoverAccountById(user.account.id)

    if(account && user){
      const transactions = await accountCtrl.recoverAccountWithTransactions(account.id)
      res.json(transactions.transaction)
    }else{
      res.status(404).json({mesage: "User not found"})
    }
  } catch {
    res.status(401).json({mesage: "The token is not valid"})
  }
})