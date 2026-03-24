import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/themeProvider";
import { ReactFlowProvider } from "@xyflow/react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Loggica",
  description: "Create a logic gates and statements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            themes={["light", "dark"]}
          >
            <ReactFlowProvider>
              <main>{children}</main>
            </ReactFlowProvider>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
