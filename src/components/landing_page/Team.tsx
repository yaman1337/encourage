import Image from "next/image";

import AnanyaImage from "@root/public/Ananya.jpg";
import BisheshImage from "@root/public/Bishesh.jpg";
import SaranaImage from "@root/public/Sarana.jpg";

import RawTeamData from "@root/lib/team.json";

interface ITeamData {
  name: string;
  image: string;
  description: string;
}

const TeamData: ITeamData[] = RawTeamData;

function Team() {
  return (
    <div className="flex flex-col justify-center items-center pt-5 px-10">
      <div className="title text-4xl">Meet Our Amazing Team</div>

      <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {TeamData.map((item) => {
          return (
            <div className=" cursor-pointer shadow-lg rounded-lg p-6 flex flex-col justify-center items-center gap-5 hover:shadow-xl">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  className="object-cover max-w-full max-h-full rounded-full"
                  src={item.image}
                  alt={item.name + "'s Image."}
                  width="500"
                  height="500"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
