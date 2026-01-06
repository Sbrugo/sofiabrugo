import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sofía Brugo — Backend Developer | REST APIs & Distributed Systems",
  description:
    "Backend-focused developer specialized in REST API design, modular architectures, and data-driven systems. Experience with Java, Spring Boot, NestJS, PostgreSQL, and frontend integration with React.",
  keywords: [
    "Backend Developer",
    "REST APIs",
    "Java",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "Full Stack Developer",
    "React",
    "Distributed Systems",
  ],
  authors: [{ name: "Sofía Brugo" }],
  creator: "Sofía Brugo",
  metadataBase: new URL("https://sofiabrugo.vercel.app"),
  openGraph: {
    title: "Sofía Brugo — Backend Developer",
    description:
      "Backend developer focused on clean API design, clear separation of responsibilities, and maintainable systems. Java, Spring Boot, NestJS, PostgreSQL.",
    url: "https://sofiabrugo.vercel.app",
    siteName: "Sofía Brugo — Backend Developer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofía Brugo — Backend Developer",
    description:
      "Backend-focused developer specialized in REST APIs, modular backend systems, and frontend–backend integration.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
