import Image from "next/image";
import EventImage from "@root/public/Event11.jpg";
import Link from "next/link";
type GalleryCardProp = {
  image: string;
  title: string;
};

const GalleryCard = ({ image, title }: GalleryCardProp) => {
  return (
    <div className=" shadow-lg w-full h-[250px]  border rounded-md cursor-pointer  hover:shadow-2xl">
      <Image
        alt="image"
        src={EventImage}
        className="h-3/4 w-full rounded-t-md   object-cover"
      />
      <div className="text-xl font-bold text-center mt-2">
        {title.slice(0, 30)}
      </div>
      <p className="text-blue-500 text-center hover:underline">
        <Link href={`/event`} >See more ...</Link>
      </p>
    </div>
  );
};

export default function Gallery() {
  const data: GalleryCardProp[] = [
    { image: "test", title: "Sharada Academy Visit " },
   
  ];

  return (
    <div className="w-full mt-10">
      <div className="text-4xl text-center">Some of our sessions</div>

      <div className="grid gap-4 my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {data.map((item, key) => (
          <GalleryCard image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}
