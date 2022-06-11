import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/Photo"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "123456789",
    database: "carreras",
    synchronize: true,
    logging: false,
    entities: [User, Photo],
    migrations: [],
    subscribers: [],
})


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))