import { Box } from "@chakra-ui/react";

export default function TileCard({ label }: { label: string }) {
  return (
    <Box borderWidth="1px" p={4} borderRadius="md">
      {label}
    </Box>
  );
}