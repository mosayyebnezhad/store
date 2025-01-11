import { NeonHttpDatabase } from "drizzle-orm/neon-http"
import { FriendsTable } from "../db/schema"




export const GetData = async ({ db }: { db: NeonHttpDatabase }) => {

    try {
        const res = await db.select().from(FriendsTable)



        return res
    }
    catch (e: any) { console.log(e.detail) }

    // console.log(res.command)


}