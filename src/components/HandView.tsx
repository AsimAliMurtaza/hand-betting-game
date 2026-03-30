import { HStack } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";

export default function HandView({ hand }: { hand: Tile[] }) {
  return (
    <HStack>
      {hand.map((tile) => (
        <TileCard key={tile.id} label={tile.label} />
      ))}
    </HStack>
  );
}