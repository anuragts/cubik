"use client";
import { Box, VStack } from "@/utils/chakra";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/app/components/layout/header";
import WalletContext from "@/app/components/wallet/context";
import { AuthProvider } from "./context/user";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./provider";
import { AxiomWebVitals } from "next-axiom";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.className}`}>
        <WalletContext>
          <QueryClientProvider client={client}>
            <AuthProvider>
              <Providers>
                <Header />
                <AxiomWebVitals/>
                {children}
              </Providers>
            </AuthProvider>
          </QueryClientProvider>
        </WalletContext>
      </body>
    </html>
  );
}
