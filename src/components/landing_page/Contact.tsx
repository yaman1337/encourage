"use client";

import { useState } from "react";

interface IFormData {
  senderName: string | "";
  subject: string | "";
  message: string | "";
}

const Contact = () => {
  const [formData, setFormData] = useState<IFormData>({
    senderName: "",
    subject: "",
    message: "",
  });

  return (
    <div className="w-full mt-10 lg:px-10">
      <h1 className="title text-4xl text-center">Contact Us</h1>

      <div className="mt-10 grid gap-4 sm:grid-cols-1 sm:gap-0 lg:grid-cols-2">
        <div className="text-2xl col-span-1">
          Let us know if you have any queries. If you want to be part of
          Encourage team, you can write it contact us or directly mail us{" "}
          <a href="mailto:yaman.sarabariya@gmail.com" className="text-blue-500">
            here.
          </a>
        </div>

        <div className="col-span-1 border border-t p-10 flex flex-col h-[400px] rounded-md w-full items-center">
          <h1 className="title text-2xl text-center">Send your message !</h1>
          <input
            type="text"
            placeholder="Your name."
            className="input input-bordered w-[90%] mt-5"
            value={formData.senderName}
            onChange={(e) =>
              setFormData((prev) => { return {...prev, senderName: e.target.value} })
            }
          />

          <input
            type="text"
            placeholder="Message Subject."
            className="input input-bordered w-[90%] mt-5"
            value={formData.subject}
            onChange={(e) =>
              setFormData((prev) => { return {...prev, subject: e.target.value} })
            }
          />

          <textarea
            className="textarea textarea-bordered mt-5 w-[90%]"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => { return {...prev, message: e.target.value} })
            }
          ></textarea>

          <button className="btn btn-primary mt-5 float-left">
            {" "}
            <a
              href={`mailto:yaman.sarabariya@gmail.com?subject=${formData.subject}&body=${formData.message}`}
            >
              Send Message
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
