import Image from "next/image";

import AnanyaImage from "@root/public/Ananya.jpg";
import BisheshImage from "@root/public/Bishesh.jpg";
import SaranaImage from "@root/public/Sarana.jpg";

function Team() {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <div className="title text-2xl font-bold">Meet Our Amazing Team</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center gap-5">
          <div className="w-40 h-40 flex items-center justify-center">
            <Image
              className="object-cover max-w-full max-h-full rounded-full"
              src={SaranaImage}
              alt="Sarana Image"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">Sarana Badal</h2>
          <p className="text-gray-600 text-center">
          Hello, ENCOURAGE is a project I started with a strong passion to instill the love for reading in little young minds. I myself have been taking solace in books ever since I was young and want to see more children find it too. 
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center gap-5">
          <div className="w-40 h-40 flex items-center justify-center">
            <Image
              className="object-cover max-w-full max-h-full rounded-full"
              src={BisheshImage}
              alt="Bishesh Image"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">Bishesh Shrestha</h2>
          <p className="text-gray-600 text-center">
          I love teaching and being around with the kids. I find kids very joyful. I also have keen interest in reading books.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center gap-5">
          <div className="w-40 h-40 flex items-center justify-center">
            <Image
              className="object-cover max-w-full max-h-full rounded-full"
              src={AnanyaImage}
              alt="Ananya Image"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">Ananya Dahal</h2>
          <p className="text-gray-600 text-center">
          Hi people I am Ananya Dahal. Graduated +2 from Kathmandu Model College (KMC). My hobbies are exploring new things and dealing with kids.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
