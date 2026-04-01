"use client";

import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Leaderboard from "@/components/Leaderboard";
import { getLeaderboard } from "@/utils/leaderboard";

export default function Home() {
  const router = useRouter();
  const scores = getLeaderboard();

  return (
    <Box
      w="100vw"
      minH="100vh"
      px={6}
      py={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >

      <VStack spacing={8} zIndex={1}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign="center"
          textShadow="2px 2px 4px rgba(0,0,0,0.6)"
        >
          Hand Betting Game
        </Heading>

        <Button
          colorScheme="teal"
          px={10}
          py={6}
          fontSize="lg"
          onClick={() => router.push("/game")}
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.2s ease"
        >
          New Game
        </Button>

        <Leaderboard scores={scores} />
      </VStack>
    </Box>
  );
}