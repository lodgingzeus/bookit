import { prisma } from "@/db";
// pages/api/data.js

// export async function GET(req: any, res: any) {
//     // Simulating a database query or API call
//     const data = {
//       name: "John Doe",
//       age: 30,
//       occupation: "Web Developer",
//     };
  
//     return new Response(JSON.stringify(data))
//   }
  
export async function POST(req: any) {
  try {
    const { name, email, password } = await req.json();

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    return new Response(JSON.stringify(JSON.stringify(newUser)));
  } catch (error) {
    console.log(error)
  }
}