import { NeonHttpDatabase } from "drizzle-orm/neon-http"
import { FriendsTable } from "../db/schema"
import { eq } from "drizzle-orm";




export const DelData = async ({ db }: { db: NeonHttpDatabase }) => {

    try {
        const userEmail = "m@me.com"

        await db.delete(FriendsTable).where(eq(FriendsTable.email, userEmail))


        console.log('User info deleted!')
    }
    catch (e: any) { console.log(e.detail) }

    // console.log(res.command)


}