import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {MyThemeProvider} from "@/components/MyThemeProvider";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	text: "Portfolio",
	description: "Portfolio-Next-two",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body
			className={` ${spaceGrotesk.className} antialiased`}
		>
		<MyThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</MyThemeProvider>
		</body>
		</html>
	);
}
