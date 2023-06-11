import express, { Request, Response, NextFunction } from 'express';
import { prisma } from '@/db';
import multer from 'multer';
import { ParsedQs } from 'qs';

const router = express.Router();
router.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const prisma = new PrismaClient()
>>>>>>> dfab9c65e2a256ec84569800e42d4e91deb646c2

const router = express.Router();
router.use(express.json());

<<<<<<< HEAD
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), createListing);

async function createListing(req: Request<
    {},
    {},
    { name: string; price: string; location: string; amenities: string; description: string },
    ParsedQs
>, res: Response, next: NextFunction) {
    try {
        const { name, price, location, amenities, description } = req.body;
        const image = req.file;

=======
export async function POST(req: Request){
    const { name, price, location, amenities, description, image } = await req.json()
    console.log(image)
    
    try {
        const imageUrl = await cloudinary.uploader.upload(image, { public_id: "olympic_flag" }, 
        function(error, result) {console.log(result); })
        // console.log(imageUrl)
>>>>>>> dfab9c65e2a256ec84569800e42d4e91deb646c2
        const newListing = await prisma.hotel.create({
            data: {
                name: name,
                price: price,
                address: location,
                amenities: amenities,
                description: description,
<<<<<<< HEAD
                image: image ? image.filename : undefined, // Use the uploaded file's name as the image field value if an image is uploaded
            },
        });

        return res.json({ success: 'success' });
=======
                images: imageUrl.secure_url
            }
        })
        return new Response(JSON.stringify({"success": "success"}))
>>>>>>> dfab9c65e2a256ec84569800e42d4e91deb646c2
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error creating listing' });
    }
}

export { router as newListingRouter };
