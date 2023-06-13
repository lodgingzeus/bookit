import Header from "@/components/Header/page";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from "next/image";
import {getHotelById} from "@/actions/getHotelById";
import BookNow from "@/components/BookNow/page";

const Page = async ({ params }: any) => {
  const currentUser = await getCurrentUser();

  const { id } = params;
  const hotel = await getHotelById(id);

  return (
    <div className="mx-auto px-4">
      <Header currentUser={currentUser} />
      <main className="flex flex-col items-center justify-center border-2 p-8">
        <h1 className="text-3xl font-bold mb-4">Hotel {hotel?.name}</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {hotel?.images.map((image, index) => (
            <div key={index} className="w-96 h-96 rounded overflow-hidden shadow-md">
              <Image src={image} alt={`Hotel Image ${index + 1}`} height={500} width={500} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="text-pink-500 underline">Show all photos</button>
        </div>
        <div className="flex justify-between items-start w-full mt-4 mb-4">
          <div className="w-8/12">
            
            <h2 className="text-xl font-bold">Hotel Description</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>

            <div className="text-left">
            <p className="text-gray-700">Hosted by John</p>
            <p className="text-gray-500">4 guests. 2 bedrooms, 2 beds</p>
          </div>
          </div>
          <div className="w-4/12 bg-pink-100 p-4 rounded">
            <BookNow hotel = {hotel} currentUser={currentUser} />
          </div>
        </div>
        <div className="max-w-xl mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="border p-4 rounded">
            {/* Add Lorem Ipsum reviews */}
            <p className="text-gray-600">[Review]</p>
            <p className="text-gray-600">[Review]</p>
            <p className="text-gray-600">[Review]</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
