import { HStack, Box } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/stores/store";

const MotionBox = motion(Box);

export default function HandView({ hand }: { hand: Tile[] }) {
  const { tileValues } = useGameStore();
  return (
    <AnimatePresence mode="wait">
      <HStack>
        {hand.map((tile) => (
          <MotionBox
            key={tile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <TileCard
              key={tile.id}
              tile={tile}
              tileValues={tileValues}
              size="xxl"
            />
          </MotionBox>
        ))}
      </HStack>
    </AnimatePresence>
  );
}
