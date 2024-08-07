import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Connections",
  description: "Connections made for League of Legends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={noto_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
