import { NeonHttpDatabase } from "drizzle-orm/neon-http"
import { FriendsTable } from "../db/schema"




export const AddQuery = async ({ db }: { db: NeonHttpDatabase }) => {



    const friend: typeof FriendsTable.$inferInsert = {
        name: "John",
        age: 23,
        family: "Doe",
        email: "m@me.com",
        phoneNumber: "094839473"
    }

    try { const res = await db.insert(FriendsTable).values(friend) }
    catch (e:any) { console.log(e.detail) }

    // console.log(res.command)


}