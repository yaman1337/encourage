"use client";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import React from "react";
import { ThemeContext } from "../../context/theme_context";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import About from "@/components/landing_page/About";
import Team from "@/components/landing_page/Team";
import Contact from "@/components/landing_page/Contact";
import Home from "@/components/landing_page/Home";
import Gallery from "@/components/landing_page/Gallery";

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

        {/* Home */}

        <div id="home" style={pageStyles}>
          <Home />
        </div>


        {/* About */}
        <div id="about" style={pageStyles}>
          <About />
        </div>

         {/* About */}
         <div id="gallery" style={pageStyles}>
          <Gallery />
        </div>


        {/* Team */}
        <div id="team" style={pageStyles}>
          <Team />
        </div>


        {/* Contact */}
        <div id="contact" style={pageStyles}>
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
