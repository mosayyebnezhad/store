import { NeonHttpDatabase } from "drizzle-orm/neon-http"
import { FriendsTable } from "../db/schema"
import { eq } from "drizzle-orm";




export const PutData = async ({ db }: { db: NeonHttpDatabase }) => {

    try {


        const userEmail = "m@me.com";




        const Diffrent: Partial<typeof FriendsTable.$inferInsert> = {
            name: "mohammad hasan"

        }


        await db
            .update(FriendsTable)
            .set(Diffrent)
            .where(eq(FriendsTable.email, userEmail));



        console.log('User info updated!')
    }
    catch (e: any) { console.log(e.detail) }

    // console.log(res.command)


}