import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export class userController {

  async save(user: Users) {
    const userSave = await AppDataSource.manager.save(user)
    return userSave
  }

  async recoverAllUsers() {
    const users = await AppDataSource.manager.find(Users)
    return users
  }
}