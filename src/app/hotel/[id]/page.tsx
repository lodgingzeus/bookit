/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header/page";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from "next/image";
import { getHotelById } from "@/actions/getHotelById";

const Page = async ({ params }: any) => {
  const currentUser = await getCurrentUser();

  const { id } = params;
  const hotel = await getHotelById(id);


  return (
    <div>
      <Header currentUser={currentUser} />
      <main className="flex flex-col items-center justify-center border-inherit p-4">
        <div className="mt-4">
        <h1 className="text-6xl font-bold text-center my-4 p-2">Hotel {hotel?.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hotel?.images.map((image, index) => (
            <div key={index} className="w-96 h-96 rounded overflow-hidden shadow-md shadow-black">
              <Image src={image} alt={`Hotel Image ${index + 1}`} height={500} width={500} className="object-cover w-full h-full sm:h-80 md:h-96"/>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="m-8 p-2 bg-alt text-white hover:bg-primary">Show all photos</button>
        </div>        
        <div className="flex justify-between items-start w-full mt-4 mb-4 text-left">
          <div className="w-8/12">
            <h2 className="text-4xl font-bold mb-4">Hotel Description</h2>
            <p className=" leading-relaxed mr-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facilis assumenda perferendis ipsum fugiat error atque adipisci, incidunt facere sint quo maxime itaque odio molestiae? Quasi harum libero autem corporis.
            </p>
            <br />
            <div>
              <p className="text-4xl font-bold">Hosted by John</p>
              <p className="text-lg font-medium">4 guests. 2 bedrooms, 2 beds</p>
            </div>
          </div>
          </div>
          <br />
          <div className="w-fit bg-gray-300 p-6 rounded drop-shadow-md shadow-white">
            <h3 className="text-2xl font-bold mb-2">Book Now</h3>
            <p className="">Check-in: [Check-in-date]</p>
            <p className="">Check-out: [Check-out-date]</p>
            <p className="">Total Price: [Total-price]</p>
            <button className="w-auto mt-4 bg-alt text-white font-semibold py-2 px-4 rounded hover:bg-primary transition-colors duration-300 ease-in-out">Book</button>
          </div>
        
       <br />
        <div className="max-w-xl mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="border p-4 rounded">
            {/* Add Lorem Ipsum reviews */}
            <p className=" leading-relaxed">[Review]</p>
            <p className=" leading-relaxed">[Review]</p>
            <p className=" leading-relaxed">[Review]</p>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Page;
