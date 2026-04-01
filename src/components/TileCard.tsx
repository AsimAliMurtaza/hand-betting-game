import { Box, Text, VStack } from "@chakra-ui/react";
import { Tile } from "@/types/types";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function TileCard({ tile, tileValues }: { tile: Tile; tileValues: Record<string, number> }) {
  const getStyles = () => {
    if (tile.type === "number") {
      return {
        bg: "blue.50",
        borderColor: "blue.400",
        color: "blue.800",
      };
    }

    if (tile.type === "dragon") {
      return {
        bg: "red.50",
        borderColor: "red.400",
        color: "red.700",
      };
    }

    return {
      bg: "purple.50",
      borderColor: "purple.400",
      color: "purple.700",
    };
  };

  const styles = getStyles();

  return (
    <MotionBox
      w="100px"
      h="150px"
      borderWidth="2px"
      borderRadius="lg"
      bg={styles.bg}
      borderColor={styles.borderColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -5 }}
    >
      <VStack spacing={6} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          {tile.type.toUpperCase()}
        </Text>

        <Text fontSize="2xl" color={styles.color}>
          {formatLabel(tile.label)}
        </Text>

        <Text fontSize="md" color={styles.color} fontWeight="bold">
          {tileValues[tile.label] !== undefined ? `${tileValues[tile.label]} pts` : `${tile.label} pts`}
        </Text>
      </VStack>
    </MotionBox>
  );
}

function formatLabel(label: string) {
  if (label.includes("Dragon")) {
    return label.replace("Dragon", "🐉");
  }

  if (label.includes("Wind")) {
    return label.replace("Wind", "🌬️");
  }

  return label;
}
