import Header from "@/components/Header/page"
import getCurrentUser from "@/actions/getCurrentUser"
import Image from "next/image"
import img1 from '../../images/img.jpg'

const page = async ( { params }: any ) => {
  const currentUser = await getCurrentUser()

  const { id }= params
  return (
    <div>
      <Header currentUser = { currentUser }/>
      <main className="flex flex-col items-center justify-center border-2 p-8">
      <h1 className="text-3xl font-bold mb-4">Hotel F</h1>
      <div className="w-96 h-96 rounded overflow-hidden shadow-md mb-4">
        <Image src={img1} alt="sex" className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-between w-5/12">
        <div className="text-left">
          <p className="text-gray-700">Hosted by John</p>
          <p className="text-gray-500">4 guests. 2 bedrooms, 2 beds</p>
        </div>
        <button className="p-2 bg-blue-500 text-white rounded">Book Now</button>
      </div>
      <div className="max-w-xl mt-8 text-center">
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
    </div>
  )
}

export default page