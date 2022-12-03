import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Accounts } from "./Accounts"

@Entity()
export class Users {

    constructor(username: string, password: string, account: Accounts) {
        this.username = username
        this.password = password
        this.account = account
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne((type) => Accounts, account => account.id) @JoinColumn()
    account: Accounts

}
