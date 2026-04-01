import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Hand Betting Game",
  description:
    "A simple hand betting game built with React, Next.js, and Zustand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* The main layout container with a subtle background pattern and centered content */}
          <Box
            mx="auto"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="flex-start"
            gap={10}
            minH="100vh"
            bgGradient="linear(to-br, gray.900, gray.800, gray.700)"
            color="white"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset={0}
              opacity={0.05}
              bgImage="radial-gradient(circle, white 1px, transparent 1px)"
              bgSize="20px 20px"
            />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
