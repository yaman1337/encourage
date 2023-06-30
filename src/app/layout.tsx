import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeProvider from "../../context/theme_context";

export const metadata = {
  title: "Encourage",
  description: "Making people fall in love with reading.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return <ThemeProvider>{children}</ThemeProvider>;
}
