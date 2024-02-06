import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400"  });

export const metadata: Metadata = {
    title: "Holm Digital Design",
    description: "Emma Holm Digital Design",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-[#FAECC5] ${inter.className}`}>{children}</body>
        </html>
    );
}
