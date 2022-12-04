import { AppDataSource } from "../data-source";
import { Transactions } from "../entity/Transactions";

export class TransactionController {

  async update(transaction: Transactions) {
    const transactionSave = await AppDataSource.manager.save(transaction)
    return transactionSave
  }
}
