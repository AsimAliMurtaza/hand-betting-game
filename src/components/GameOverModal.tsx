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

export default function GameOverModal() {
  const { isGameOver, score, startGame } = useGameStore();

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
          <Text>Final Score: {score}</Text>

          <Button mt={4} onClick={startGame}>
            Play Again
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
