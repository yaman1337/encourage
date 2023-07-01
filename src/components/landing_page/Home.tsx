import LibraryImage from "@root/public/Digital-Library.svg";
import Image from "next/image";

function Home() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium">
           ENCOURAGE
          </h1>
          <p className="mb-8 leading-relaxed">
          Unlock the magical world of books! Join our interactive reading adventure and ignite a lifelong love for learning. Discover captivating stories, connect with fellow bookworms, and embark on a journey that will inspire young minds to explore, imagine, and fall in love with reading.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              About Us
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={LibraryImage}
            width={"700"}
            height={"700"}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
