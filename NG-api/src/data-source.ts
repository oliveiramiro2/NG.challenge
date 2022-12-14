import "reflect-metadata"
import { DataSource } from "typeorm"
import { Accounts } from "./entity/Accounts"
import { Transactions } from "./entity/Transactions"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "ramiro",
    password: "123456",
    database: "NG",
    synchronize: true,
    logging: false,
    entities: [Users, Accounts, Transactions],
    migrations: [],
    subscribers: [],
})
