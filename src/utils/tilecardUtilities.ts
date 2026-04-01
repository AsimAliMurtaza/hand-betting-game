import { Tile } from "@/types/types";

export const getStyles = (tile: Tile) => {
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

export const sizeStyles = {
  sm: {
    w: "40px",
    h: "60px",
    fontSize: "xs",
  },
  md: {
    w: "60px",
    h: "90px",
    fontSize: "sm",
  },
  lg: {
    w: "80px",
    h: "120px",
    fontSize: "md",
  },
  xl: {
    w: "120px",
    h: "170px",
    fontSize: "lg",
  },
  xxl: {
    w: "200px",
    h: "320px",
    fontSize: "xl",
  },
};

export function formatLabel(label: string) {
  if (label.includes("Dragon")) {
    return label.replace("Dragon", "🐉");
  }

  if (label.includes("Wind")) {
    return label.replace("Wind", "🌬️");
  }

  return label;
}
