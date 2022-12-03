import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./Accounts";

@Entity()
export class Transactions {

  constructor(value: number, create_at: Date) {
    this.value = value
    this.create_at = create_at
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
