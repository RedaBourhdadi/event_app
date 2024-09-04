import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { Poppins } from "@next/font/google"; // Corrected import path
import { Variable, icons } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Correct weight key with string literals
  variable: "--font-poppins", // Correct variable key
});

export const metadata = {
  title: "Event Machine",
  description: "A simple event management app built with Next.js and MongoDB",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={poppins.variable}>
      <Provider>{children}</Provider>
      {/* <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider> */}
    </body>
  </html>
);

export default RootLayout;
