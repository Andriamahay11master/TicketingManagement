
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "../assets/scss/main.scss";
import SessionProvider from "./SessionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TicketingManagement",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
        </body>
    </html>
  );
}
