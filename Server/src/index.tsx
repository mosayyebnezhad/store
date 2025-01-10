import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Hell from './Componnent'

const app = new Hono()






app.get("/", (c) => {
  return c.html(<Hell />)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
