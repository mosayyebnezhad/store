import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


const FriendsTableColumns = {
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    family: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    phoneNumber: varchar({ length: 255 }).notNull().unique(),
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
}

export const FriendsTable = pgTable("friends", FriendsTableColumns)