import { cva, type VariantProps } from "class-variance-authority";
import Icon from "../icon";
import type React from "react";
import Skeleton from "../skeleton";

export const iconButtonVariantsContainer = cva(
  `
    inline-flex items-center justify-center cursor-pointer transition group
`,
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "h-6 w-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

interface IconButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof iconButtonVariantsContainer> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export const iconButtonVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export default function IconButton({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}: IconButtonProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={iconButtonVariants({ variant: "none", size, className })}
      />
    );
  }
  return (
    <button
      className={iconButtonVariantsContainer({
        className,
        disabled,
        size,
        variant,
      })}
      {...props}
    >
      <Icon svg={icon} className={iconButtonVariants({ variant, size })} />
    </button>
  );
}
