import { prisma } from "@/db";

export async function POST( req: Request ) {
    const { email, password } = await req.json()
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        if(user) {
            if(user?.password === password){
                return new Response(JSON.stringify({ "status": "200", "message": "success"}))
            }else{
                return new Response(JSON.stringify({ "status": "500", "error": "wrong email or password"}))
            }
        }
        else {
            return new Response(JSON.stringify({ "status": "500", "error": "No user with that email found"}))
        }
    } catch (error) {
        console.log(error)
    }
}