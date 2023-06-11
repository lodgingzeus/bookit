import express, { Request, Response, NextFunction } from 'express';
import { prisma } from '@/db';
import multer from 'multer';
import { ParsedQs } from 'qs';

const router = express.Router();
router.use(express.json());

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

        const newListing = await prisma.hotel.create({
            data: {
                name: name,
                price: price,
                address: location,
                amenities: amenities,
                description: description,
                image: image ? image.filename : undefined, // Use the uploaded file's name as the image field value if an image is uploaded
            },
        });

        return res.json({ success: 'success' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error creating listing' });
    }
}

export { router as newListingRouter };
