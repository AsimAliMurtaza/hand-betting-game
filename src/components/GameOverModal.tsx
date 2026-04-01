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
      <ModalContent>
        <ModalHeader>Game Over</ModalHeader>

        <ModalBody>
          <Text>Final Score: {score}</Text>

          <Button mt={4} onClick={startGame}>
            Play Again
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}