import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import connectMongo from "@/db/connectMongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suite-Stay",
  description: "Stay at your own comfort",
};

export default async function RootLayout({ children }) {
  await connectMongo()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sidemenu={true} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
