import { serve } from '@hono/node-server'
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http'
import { Hono } from 'hono'
import "dotenv/config"
import EndPoints from './Main'
import { DrizzleEntity } from 'drizzle-orm'
import drizzleConfig from '../drizzle.config'
import { HTTPException } from 'hono/http-exception'
const app = new Hono()



let db: NeonHttpDatabase;
try {
  let db = drizzle(process.env.DATABASE_URL!)




  EndPoints({ app, db })


} catch (e) {
  // console.log(`Error: ${e}`)

  app.get("*", (c) => {


    return c.json({ message: "Connection String Faild" })
  })
}












const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
