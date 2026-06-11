import type { CardProps } from '../types';

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`
        bg-background shadow-custom rounded-xl
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </div>
  );
}