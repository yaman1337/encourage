"use client";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import React from "react";
import { ThemeContext } from "../../../context/theme_context";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";

import Event11 from "@root/public/Event21.jpg";
import Event12 from "@root/public/Event22.jpg";
import Event13 from "@root/public/Event23.jpg";
import Event14 from "@root/public/Event24.jpg";
import Event15 from "@root/public/Event25.jpg";
import Event16 from "@root/public/Event26.jpg";
import Event17 from "@root/public/Event27.jpg";
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
        Bijeshwori School Visit
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
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={Event17} className="w-full h-[500px] object-cover" alt="image of event" />
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
        On 28th july we visited bijeswori school. We took our session with grade 1-4 students. An interesting activity we did was we read them out a story and asked them to draw how they’d imagine the characters would look like to them.  
        </p>

        <button className="btn btn-primary my-10 "><Link href={"/#gallery"} >Back</Link></button>


        </div>

        <Footer />
      </body>
    </html>
  );
}
