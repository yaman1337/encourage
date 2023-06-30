import LibraryImage from "@root/public/Digital-Library.svg";
import Image from "next/image";

function Home() {
  return (
    <div className="home flex w-full h-full sm:flex-row">
      {/* text content */}
      <div className="text-content w-1/2 flex flex-col justify-center align-center">
        <div className="text-5xl "> ENCOURAGE </div>
      </div>

      {/* image */}
      <div className="w-1/2 h-full">
        <Image src={LibraryImage} alt="Library Image" className="pr-50" />
      </div>
    </div>
  );
}

export default Home;
