import React from 'react';

export interface ButtonConfig {
  input: string;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export interface CalculatorContextType {
  history: string[];
  updateHistory: (operation: string, result: string) => void;
}

export interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: 'default' | 'muted' | 'heading' | 'blast';
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CalculatorDisplayProps {
  operation: string;
  result: string;
}