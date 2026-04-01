import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DECK_STACK_LAYER_SIZE } from "@/constants/constants";

const MotionBox = motion(Box);

export default function DeckStack({ count }: { count: number }) {
  // Calculate the number of layers to display
  const layers = Math.min(5, Math.floor(count / DECK_STACK_LAYER_SIZE));

  return (
    <Box position="relative" w="100px" h="130px">
      {[...Array(layers)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${i * 2}px`}
          left={`${i * 2}px`}
          w="100px"
          h="130px"
          bg="gray.700"
          borderRadius="md"
          boxShadow="md"
        />
      ))}

      <MotionBox
        position="absolute"
        w="100px"
        h="130px"
        bg="gray.600"
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3 }}
        key={count}
      >
        <Text color="whiteAlpha.800" fontWeight="bold">
          {count}
        </Text>
      </MotionBox>
    </Box>
  );
}
