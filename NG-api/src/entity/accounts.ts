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

  @OneToOne(() => Users)
  user: Users

  @OneToMany(() => Transactions, Transactions => Transactions.creditedAccountId)
  creditedId: Transactions[]

  @OneToMany(() => Transactions, Transactions => Transactions.debitedAccountId)
  debitedId: Transactions[]
}
