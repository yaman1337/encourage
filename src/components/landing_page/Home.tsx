import LibraryImage from "@root/public/Digital-Library.svg";
import Image from "next/image";

function Home() {
  return (
    <section className="body-font grid sm:grid-cols-1 lg:px-20 lg:grid-cols-2">
      {/* left section */}

      <div className="flex flex-col h-full" >
        <h1 className="font-bold sm:text-5xl mt-20 lg:mt-40">
          ENCOURAGE
        </h1>
        <p className="mb-8 leading-loose mt-5 text-lg">
          Hello everyone. ENCOURAGE is a group of fresh high school graduates.
          Our collective goal is to inspire young children through the world of
          books. We want the children who've grown up surrounded by gadgets to
          choose books to challenge their mind and imagination.
        </p>
      </div>

      {/* right section */}
      <div>
        <Image src={LibraryImage} alt="Library image." className="mt-10" />
      </div>
    </section>
  );
}

export default Home;
