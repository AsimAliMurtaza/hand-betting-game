import { Box, Text, VStack } from "@chakra-ui/react";
import { TileProps } from "@/types/types";
import { motion } from "framer-motion";
import { getStyles, sizeStyles, formatLabel } from "@/utils/tilecardUtilities";

const MotionBox = motion(Box);

export default function TileCard({ tile, tileValues, size }: TileProps) {
  //get the styles for the tile based on its type and label using the getStyles function from tilecardUtilities
  const styles = getStyles(tile);
  //get the size styles for the tile based on the size prop using the sizeStyles object from tilecardUtilities
  const { w, h, fontSize } = sizeStyles[size || "md"];

  return (
    <MotionBox
      w={w}
      h={h}
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

        <Text fontSize={fontSize} color={styles.color}>
          {/* Format the label of the tile using the formatLabel function */}
          {formatLabel(tile.label)}
        </Text>
        {/* Display the point value of the tile, using the tileValues from the game store if available, otherwise just show the label with "pts" */}
        <Text fontSize={fontSize} color={styles.color} fontWeight="bold">
          {tileValues[tile.label] !== undefined
            ? `${tileValues[tile.label]} pts`
            : `${tile.label} pts`}
        </Text>
      </VStack>
    </MotionBox>
  );
}
