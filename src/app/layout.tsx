import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaghaz Preschool | Ism Ki Pehli Seedhi",
  description:
    "A nurturing Montessori preschool focused on creativity, learning and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          position="bottom-center"
          richColors
          duration={3000}
          closeButton={false}
        />
      </body>
    </html>
  );
}
