import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/db";
import multer from 'multer';
import { Request, ParamsDictionary, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name as the uploaded file name
    }
});

const upload = multer({ storage: storage });

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getHotelList() {
    const session = await getSession();

    try {
        if (!session) return null;
        const hotels = await prisma.hotel.findMany();

        return hotels;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function POST(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
    upload.single('image')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred while uploading the file
            console.log(err);
            return res.status(500).json({ error: 'Error uploading file' });
        } else if (err) {
            // An unknown error occurred while uploading the file
            console.log(err);
            return res.status(500).json({ error: 'Unknown error' });
        }

        const { name, price, location, amenities, description } = req.body;
        const image = req.file;

        try {
            const session = await getSession();

            if (!session) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const newListing = await prisma.hotel.create({
                data: {
                    name: name,
                    price: price,
                    address: location,
                    amenities: amenities,
                    description: description,
                    image: image ? image.filename : null // Use the uploaded file's name as the image field value if an image is uploaded
                }
            });

            return res.json({ success: 'success' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error creating listing' });
        }
    });
}
