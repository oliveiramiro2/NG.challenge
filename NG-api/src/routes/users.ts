import { Router } from "express"
import { userController } from "../controller/userController"
import { Users } from "../entity/Users"

export const userRouter = Router()
const userCtrl = new userController()

userRouter.post('/', async (req, res) => {
  const { username, password } = req.body
  const user = new Users(username, password)
  const saveUser = await userCtrl.save(user)
  res.json(saveUser)
})

userRouter.get('/', async (req, res) => {
  const allUsers = await userCtrl.recoverAllUsers()
  res.json(allUsers)
})