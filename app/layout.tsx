import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Broken Wing Racing League",
  description: "The Best IRacing League. Featuring GT3, Super Formula Lights, and Vee/Ray multiclass.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen">
        <Header/>
        <main className=" flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
