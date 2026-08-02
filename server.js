import { createClient } from "redis"

const client = createClient()
client.connect()

client.on("error", (err) => console.log("Redis Client Error: ", err))
await client.set("name", "Daniel")

const getName = await client.get("name")

console.log(getName)