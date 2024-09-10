import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import type {ReactNode} from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livno Panorama",
  description: "A super high-quality panorama of Livno.",
	authors: [
		{
			name: "Omar Zunic",
			url: "https://omarzunic.com",
		},
	],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <Script
	    defer
	    data-domain="livno.omarzunic.com"
	    src="https://analytics.omarzunic.com/js/script.js"
    />
      <body className={inter.className}>{children}</body>
    </html>
  );
}