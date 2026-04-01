import { Box, Text, VStack } from "@chakra-ui/react";
import { Tile } from "@/types/types";

export default function TileCard({ tile }: { tile: Tile }) {
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
    <Box
      w="70px"
      h="100px"
      borderWidth="2px"
      borderRadius="lg"
      bg={styles.bg}
      borderColor={styles.borderColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-4px) scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <VStack spacing={0}>
        <Text fontSize="xs" color="gray.500">
          {tile.type.toUpperCase()}
        </Text>

        <Text fontSize="2xl" fontWeight="bold" color={styles.color}>
          {formatLabel(tile.label)}
        </Text>
      </VStack>
    </Box>
  );
}

function formatLabel(label: string) {
  // make labels nicer
  if (label.includes("Dragon")) {
    return label.replace("Dragon", "🐉");
  }

  if (label.includes("Wind")) {
    return label.replace("Wind", "🌬️");
  }

  return label;
}