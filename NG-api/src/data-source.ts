import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "ramiro",
    password: "123456",
    database: "NG",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
