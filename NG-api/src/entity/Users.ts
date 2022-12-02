import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Accounts } from "./accounts"

@Entity()
export class Users {

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne(() => Accounts)
    accountId: Accounts

}
