import { prisma } from "@/db"

export async function POST(req: Request){
    const { name, price, location, amenities, description } = await req.json()

    try {
        const newListing = await prisma.hotel.create({
            data: {
                name: name,
                price: price,
                address: location,
                amenities: amenities,
                description: description
            }
        })
        return new Response(JSON.stringify({"success": "success"}))
    } catch (error) {
        console.log(error)
    }
}