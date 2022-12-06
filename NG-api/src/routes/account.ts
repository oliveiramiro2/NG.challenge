import { Router } from "express"
import { IPayloadToken } from "../controller/accountController"
import { verify } from "jsonwebtoken"
import { userController } from "../controller/userController"

export const accountRouter = Router()
const userCtrl = new userController()

accountRouter.get('/', async (req, res) => {
  try{
    const token = String(req.headers.token)
    const payloadToken = verify(token, 'the sun is small')

    const user = await userCtrl.recoverUserById((payloadToken as IPayloadToken).id)

    res.json(user.account)
  } catch {
    res.status(401).json({message: "The token is not valid"})
  }
})