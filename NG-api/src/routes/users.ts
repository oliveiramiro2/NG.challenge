
import { compare, hash } from "bcrypt"
import { Router } from "express"
import { sign } from "jsonwebtoken"
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

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body
  const checkedUsername = await userCtrl.recoverByName(username)

  if(checkedUsername && regexPassword.test(password)) {
    const comparedPassword = compare(password, checkedUsername.password)
    if(comparedPassword){
      const token = sign({
        username: checkedUsername.username,
        password: checkedUsername.password,
        id: checkedUsername.id
      }, 'the sun is small', {expiresIn: "1d"})
      res.json({token})
    }else{
      res.status(401).json('The credentials are wrong')
    }
  }else{
    res.status(401).json('The credentials are wrong')
  }
})

userRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  const haveSameUsername = await userCtrl.checkUsernameIsUnique(username)

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
