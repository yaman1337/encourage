"use client";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import React from "react";
import { ThemeContext } from "../../../context/theme_context";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";

import Event11 from "@root/public/Event11.jpg";
import Event12 from "@root/public/Event12.jpg";
import Event13 from "@root/public/Event13.jpg";
import Event14 from "@root/public/Event14.jpg";
import Event15 from "@root/public/Event15.jpg";
import Event16 from "@root/public/Event16.jpg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const pageStyles = {
  minHeight: "90vh",
  width: "100%",
  paddingLeft: "20px",
  paddingRight: "20px",
};

export default function Main() {
  const themeContext: any = React.useContext(ThemeContext);

  React.useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (!prevTheme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const pageStyles = {
    minHeight: "90vh",
    width: "100%",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  return (
    <html
      lang="en"
      data-theme={themeContext?.theme}
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "70px" }}
    >
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar
          updateTheme={themeContext?.updateTheme}
          theme={themeContext?.theme}
        />

        <div style={pageStyles}>

        <h1 className="w-full text-center text-3xl font-bold py-5" >
        Sharada Academy Visit
        </h1>

          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={Event11} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image src={Event12} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image src={Event13} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <Image src={Event14} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={Event15} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={Event16} className="w-full h-[500px] object-cover" alt="image of event" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

        <p className="text-xl px-10 py-10 tracking-normal">
        We had out first session in Sharada School, Kapan, with gr.1 and 2. We read a Nepali book and showed them a short english story. We asked them questions, danced, sang some songs and overall the kids were very happy at the end. 
        </p>

        <button className="btn btn-primary my-10 "><Link href={"/#gallery"} >Back</Link></button>


        </div>

        <Footer />
      </body>
    </html>
  );
}
