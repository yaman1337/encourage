import ThirdImage from "@root/public/undraw_toy_car_-7-umw.svg";
import FourthImage from "@root/public/undraw_education_f8ru.svg";
import FirstImage from "@root/public/undraw_reading_book_re_kqpk.svg";
import SecondImage from "@root/public/undraw_reading_time_re_phf7.svg";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col justify-center items-center pt-5 pb-10">
      <div className="title text-4xl">Our Goal</div>

      <div className="goals mt-20 w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center hover:shadow-lg transition duration-300 ease-in-out">
            <Image
              src={FirstImage}
              alt="goals image"
              style={{ height: "120px" }}
            />
            <div className="text text-xl  font-medium  text-center w-3/4 mt-5">
              Help children foster their reading skill.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center hover:shadow-lg transition duration-300 ease-in-out">
            <Image
              src={SecondImage}
              alt="goals image"
              style={{ height: "120px" }}
            />
            <div className="text text-xl  font-medium  text-center w-3/4 mt-5">
              Help them fall in love with books and reading.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center hover:shadow-lg transition duration-300 ease-in-out">
            <Image
              src={ThirdImage}
              alt="goals image"
              style={{ height: "120px" }}
            />
            <div className="text text-xl  font-medium  text-center w-3/4 mt-5">
              Build their imagination further.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center hover:shadow-lg transition duration-300 ease-in-out">
            <Image
              src={FourthImage}
              alt="goals image"
              style={{ height: "120px" }}
            />
            <div className="text text-xl  font-medium  text-center w-3/4 mt-5">
              Showcase reading as a fun activity rather than a chore.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
