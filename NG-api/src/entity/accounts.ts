import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "float" })
  balance: number

}
