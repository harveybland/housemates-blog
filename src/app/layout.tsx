import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.scss";
import { Poppins } from "next/font/google";
import Header from "./components/header/Header";
import { GlobalContextProvider } from "./Context/store";
import Wrapper from "./components/Wrapper";

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
        <main>
          <GlobalContextProvider>
            <Wrapper>
              <header>
                <Header />
              </header>
              {children}
            </Wrapper>
          </GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
