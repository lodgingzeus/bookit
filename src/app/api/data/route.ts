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
    const { username, password } = await req.json();
    return new Response(JSON.stringify(JSON.stringify({username: username, pass: password})));
  } catch (error) {
    console.log(error)
  }
}