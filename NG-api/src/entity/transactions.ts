import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./accounts";

@Entity()
export class Transactions {

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
