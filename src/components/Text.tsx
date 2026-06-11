import { TextProps } from '../types';

const textVariant = {
  default: "text-xl text-white",
  muted: "text-xl text-text-secondary ",
  heading: "text-2xl text-white",
  blast: "text-3xl text-white",
};

export function Text({ as = "span", variant = "default", className, children, ...props }: TextProps) {
  const Component = as;
  return (
    <Component
      className={`${textVariant[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}