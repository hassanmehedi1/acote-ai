import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/mycompos/navbar";
import { Footer } from "@/components/component/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Acote AI | Acote Limited",
  description: "Acote AI Innovation Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
