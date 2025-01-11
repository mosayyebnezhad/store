import { Context, Hono } from "hono"
import { AddQuery } from "./repository/add"
import { NeonHttpDatabase } from "drizzle-orm/neon-http"
import { GetData } from "./repository/get"
import { PutData } from "./repository/put"
import { DelData } from "./repository/del"

const EndPoints = ({ app, db }: { app: Hono, db: NeonHttpDatabase }) => {


    app.get("/", (c: Context) => {



        return c.json({ message: "Hello, World!" })
    })

    app.get("/add", (c: Context) => {


        AddQuery({ db })
        return c.json({ message: "Hello, World!" })
    })
    app.get("/get", async (c: Context) => {


        const me = await GetData({ db })
        return c.json({ message: me })
    })


    app.get("/put", async (c: Context) => {


        PutData({ db })
        return c.json({ message: "me" })
    })


    app.get("/del", async (c: Context) => {


        DelData({ db })
        return c.json({ message: "me" })
    })


}


export default EndPoints
