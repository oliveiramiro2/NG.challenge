import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export class userController {

  async save(user: Users) {
    const userSave = await AppDataSource.manager.save(user)
    return userSave
  }

  async recoverAllUsers() {
    const users = await AppDataSource.manager.find(Users, {relations: ['account']})
    return users
  }

  async recoverByName(username: string) {
    const usernameCheck = await AppDataSource.manager.findOne(Users, {where: {username: username}})
    return usernameCheck
  }

  async checkUsernameIsUnique(usernameToCheck: string) {
    const allUsers = await this.recoverAllUsersToCheck()
    let haveSameUsername = false

    allUsers.map((value, index) => {
      if(value.username === usernameToCheck) {
        haveSameUsername = true
      }
    })

    return haveSameUsername
  }

  async recoverAllUsersToCheck() {
    const users = await AppDataSource.manager.find(Users)
    return users
  }

  async recoverUserById(id: number) {
    const user = await AppDataSource.manager.findOne(Users, {relations: ['account'], where: {id: id}})
    return user
  }
}