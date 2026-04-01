import { HStack } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/stores/store";

export default function HandView({ hand }: { hand: Tile[] }) {
  const { tileValues } = useGameStore();
  return (
    <AnimatePresence mode="wait">
      <HStack>
        {hand.map((tile) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
          >
            <TileCard key={tile.id} tile={tile} tileValues={tileValues} />
          </motion.div>
        ))}
      </HStack>
    </AnimatePresence>
  );
}
