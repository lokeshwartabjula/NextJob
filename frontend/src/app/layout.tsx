import { Inter } from "next/font/google";
import ResponsiveAppBar from "./header/Header";
import { UserProvider } from "./(context)/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Job",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <UserProvider>
          <>
            <ResponsiveAppBar />
            {children}
          </>
        </UserProvider>
      </body>
    </html>
  );
}
