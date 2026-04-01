import { HStack } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";

export default function HandView({ hand }: { hand: Tile[] }) {
  return (
    <HStack mt={4} justify="center" spacing={4} wrap="wrap" >
      {hand.map((tile) => (
        <>
        <TileCard key={tile.id} tile={tile} />
        </>
      ))}
    </HStack>
  );
}