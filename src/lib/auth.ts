import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {db, schema} from "@/index";
import {admin} from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema
    }),
    emailAndPassword: {
        enabled: false,
    },
    socialProviders: {
        slack: {
            clientId: process.env.SLACK_CLIENT_ID as string,
            clientSecret: process.env.SLACK_CLIENT_SECRET as string,
            team: "T042VRYLETC",
        },
    },
    plugins: [
        admin()
    ]
});