import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./lib/db"


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    // providers: [GitHub],
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
})