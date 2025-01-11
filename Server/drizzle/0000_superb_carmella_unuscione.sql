CREATE TABLE "friends" (
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"family" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phoneNumber" varchar(255) NOT NULL,
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "friends_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	CONSTRAINT "friends_email_unique" UNIQUE("email"),
	CONSTRAINT "friends_phoneNumber_unique" UNIQUE("phoneNumber")
);
