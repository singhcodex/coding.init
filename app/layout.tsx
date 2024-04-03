import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: {
		template: "%s | Simranjeet Singh",
		default: "Coding init",
	},
	authors: {
		name: "Simranjeet Singh",
	},

	description:
		"Based in Deutschland, I'm a Fullstack developer with 3+ years of experience in Angular, TypeScript, PHP. I believe in creating User friendly and easy to understand web Applications.",
	openGraph: {
		title: "Coding init",
		description:
			"Based in Deutschland, I'm a Fullstack developer with 3+ years of experience in Angular, TypeScript, PHP. I believe in creating User friendly and easy to understand web Applications..",
		url: "http://localhost:3000/",
		siteName: "Coding init",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
