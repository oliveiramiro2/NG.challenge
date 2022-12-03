import { AppDataSource } from "../data-source";
import { Accounts } from "../entity/Accounts";
import { Transactions } from "../entity/Transactions";

export class AccountController {

  async create(account: Accounts) {
    const create = await AppDataSource.manager.save(account)
    return create
  }

  async recoverAccount() {
    const account = await AppDataSource.manager.find(Accounts)
    return account
  }

  async recoverAccountById(id: number) {
    const account = await AppDataSource.manager.getRepository(Accounts).findOneBy({id: id})
    return account
  }

  async update(account: Accounts, value: number) {
    if(account !== null){
      const update = await AppDataSource.manager.update(Accounts, account.id, {balance: account.balance + value})
      return update
    }
  }
}
