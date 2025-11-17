import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlurryBlob from "@/components/animata/background/blurry-blob";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elijah Hargreaves | Computer Engineer",
  description: "Portfolio of Elijah Hargreaves — student at UCSB.",
  openGraph: {
    title: "Elijah Hargreaves | Computer Engineer @ UCSB",
    description:
      "See my projects and work experience.",
    url: "https://elijah.codes", // <-- replace with your site URL
    siteName: "Elijah Hargreaves Portfolio",
    images: [
      {
        url: "/icon.png", // optional preview image
        width: 408,
        height: 612,
        alt: "Elijah Hargreaves Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Hargreaves | Computer Engineer @ UCSB",
    description:
      "See my projects and work experience",
    images: ["/icon.png"], // optional preview image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Blurry Blob Background */}
        <BlurryBlob 
          firstBlobColor="bg-blue-600" 
          secondBlobColor="bg-purple-600"
        />
        {/* Content wrapper */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
