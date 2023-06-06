import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/db"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password' }
            },
            async authorize(credentials: any){
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                return user
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }