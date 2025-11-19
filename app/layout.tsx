import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const switzerBlack = localFont({
  src: "../public/fonts/Switzer-Black.woff2",
  variable: "--font-switzer-black",
  weight: '900',
  display: 'swap',
  style: 'normal'
});

export const switzerReg = localFont({
  src: "../public/fonts/Switzer-Medium.woff2",
  variable: "--font-switzer-reg",
  weight: '300',
  display: 'swap',
  style: 'normal'
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
      <body className={`${switzerBlack.variable} ${switzerReg.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
