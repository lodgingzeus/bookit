import prisma  from "@/db"

export async function POST(req: Request){
    const { hotelName, price, location, amenities, description, image, hostId } = await req.json()

    try {
        const newListing = await prisma.hotel.create({
            data: {
                name: hotelName,
                price: price,
                address: location,
                amenities: amenities,
                description: description,
                images: image,
                hostId: hostId
            }
        })
        return new Response(JSON.stringify({"success": "success"}))
    } catch (error) {
        console.log(error)
    }
}