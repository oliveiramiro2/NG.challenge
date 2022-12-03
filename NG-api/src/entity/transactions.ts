import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./Accounts";

@Entity()
export class Transactions {

  constructor(value: number, create_at: Date, debitedAccountId: Accounts) {
    this.value = value
    this.create_at = create_at
    this.debitedAccountId = debitedAccountId
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "float" })
  value: number

  @Column()
  create_at: Date

  @ManyToOne(() => Accounts)
  debitedAccountId: Accounts

  @ManyToOne(() => Accounts)
  creditedAccountId: Accounts
}
