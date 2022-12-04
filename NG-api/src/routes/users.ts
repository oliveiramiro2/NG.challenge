
import { hash } from "bcrypt"
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

  const haveSameUsername = await userCtrl.checkUsernameIsUnique(username)

  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

  if(username.length > 2 && !haveSameUsername && regexPassword.test(password)){
    const hashPassword = await hash(password, 8)
    const account = new Accounts(100)
    const saveAccount = await accountCtrl.create(account)

    const transaction = new Transactions(100, new Date(), saveAccount)
    const saveTransaction = await transactionsCtrl.update(transaction)

    const user = new Users(username, hashPassword, saveAccount)
    const saveUser = await userCtrl.save(user)

    res.json([saveUser, saveTransaction])
  }else{
    regexPassword.test(password)
    ? res.status(404).json({mesage: "Error the username must to be higher than 2 characters and unique"})
    : res.status(404).json({mesage: "The pattern of password is not right"})
  }
})

userRouter.get('/', async (req, res) => {
  const allUsers = await userCtrl.recoverAllUsers()
  res.json(allUsers)
})
