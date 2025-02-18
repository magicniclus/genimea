import { StoreProvider } from "@/redux/StoreProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genimea IQ",
  description:
    "Genimea IQ is a platform to test your IQ and improve your cognitive skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={inter.className}>{children}</body>
        <GoogleTagManager gtmId="GTM-WDW3PJNB" />
      </html>
    </StoreProvider>
  );
}
