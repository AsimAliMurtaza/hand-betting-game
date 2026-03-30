"use client";

import { Button, Box, Text } from "@chakra-ui/react";

export default function GamePage() {

  return (
    <Box p={6} textAlign="center" mt={10} borderWidth="1px" borderRadius="md">
      <Button onClick={() => {}} colorScheme="teal">
        Draw Hand
      </Button>

        <Text mt={4}>Hand value</Text>
    </Box>
  );
}