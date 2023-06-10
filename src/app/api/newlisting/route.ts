// import { prisma } from "@/db"
import { v2 as cloudinary } from 'cloudinary'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req: Request){
    const { name, price, location, amenities, description, image } = await req.json()
    console.log(image)
    
    try {
        const imageUrl = await cloudinary.uploader.upload(image, { public_id: "olympic_flag" }, 
        function(error, result) {console.log(result); })
        // console.log(imageUrl)
        const newListing = await prisma.hotel.create({
            data: {
                name: name,
                price: price,
                address: location,
                amenities: amenities,
                description: description,
                images: imageUrl.secure_url
            }
        })
        return new Response(JSON.stringify({"success": "success"}))
    } catch (error) {
        console.log(error)
    }
}