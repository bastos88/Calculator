import { Text } from './Text';
import type { ButtonProps } from '../types';

const buttonVariants = {
  default: "bg-background",
  primary: "bg-primary",
  secondary: "bg-secondary",
};

export function Button({ variant = "default", className, children, ...props }: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`flex items-center justify-center rounded-xl
        p-3 cursor-pointer text-text bg-gradient-custom
        hover:bg-gradient-hover shadow-custom
        ${buttonVariants[variant]}
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </Text>
  );
}