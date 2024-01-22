import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.scss";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { GlobalContextProvider } from "./Context/store";

const poppins = Poppins({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Housemates Blog",
  description:
    "Explore insightful articles and stories about harmonious living, shared experiences, and the joys and challenges of having housemates. From practical tips to heartwarming anecdotes, dive into a community-centered blog that celebrates the essence of living together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="main-bg">
          <GlobalContextProvider>
            <header>
              <Header />
            </header>
            {children}
          </GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
