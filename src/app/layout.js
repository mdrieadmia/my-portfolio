import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Menubar/Menubar";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RIEAD | Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        <div className="min-h-screen bg-gray-900 py-20 flex justify-center items-center">
          {children}
        </div>
      </body>

    </html>
  );
}
