import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GXTRONIC - LED Driver Manufacturer",
  description: "GXTRONIC is a leading company in manufacturing high-quality LED drivers for industrial and commercial applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
