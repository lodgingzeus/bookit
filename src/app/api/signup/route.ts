import { prisma } from "@/db";
import { NextResponse } from "next/server";
// pages/api/data.js
  
export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const alreadyExists = await prisma.user.findUnique({ where: { email: email}})
    if(alreadyExists) {
      return new Response(JSON.stringify({ "status": "500", "error": "user already exists"}))
    }
    else {
        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            password
          }
        })
      return new Response(JSON.stringify({ "status": "200", "success": "Successfully registered"}));
    }
  } catch (error) {
    console.log(error)
  }
}