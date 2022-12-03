import { Router } from "express"
import { AccountController } from "../controller/accountController"

export const accountRouter = Router()
const accountCtrl = new AccountController()

accountRouter.get('/', async (req, res) => {
  const account = await accountCtrl.recoverAccount()
  res.json(account)
})