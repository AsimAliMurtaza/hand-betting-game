import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
} from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";
import { useRouter } from "next/navigation";

export default function GameOverModal() {
  const { isGameOver, score, startGame, gameOverReason } = useGameStore();
  const router = useRouter();

  return (
    <Modal isOpen={isGameOver} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent
        bg="gray.50"
        borderRadius="md"
        p={6}
        textAlign="center"
        boxShadow="0 10px 25px rgba(0,0,0,0.2)"
      >
        <ModalHeader>Game Over</ModalHeader>

        <ModalBody display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="lg" mb={4}>
            Reason: {gameOverReason}
          </Text>
          <Text fontSize="xl" mb={4}>
            Your final score is {score}!
          </Text>
            {/* Button to start a new game, which calls the startGame function from the game store */}
          <Button mt={4} onClick={startGame}>
            Play Again
          </Button>
              {/* Button to go back to the home page */}
          <Button mt={4} onClick={() => router.push("/")} colorScheme="teal">
            Back to Home
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
