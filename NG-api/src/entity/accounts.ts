import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transactions } from "./Transactions";
import { Users } from "./Users";

@Entity()
export class Accounts {

  constructor(balance: number) {
    this.balance = balance
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "float" })
  balance: number

  @OneToMany(() => Transactions, Transactions => (Transactions.creditedAccountId, Transactions.debitedAccountId))
  transaction: Transactions[]

  @OneToOne((type) => Users, user => user.id)
    user: Users
}
