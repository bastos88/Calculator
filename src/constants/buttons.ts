import type { ButtonConfig } from '../types';

export const buttons: ButtonConfig[][] = [
  [
    { input: "CE" },
    { input: "C", className: "flex-1 h-16" },
    { input: "/", variant: "primary" },
  ],
  [
    { input: "7" },
    { input: "8" },
    { input: "9" },
    { input: "*", variant: "default" },
  ],
  [
    { input: "4" },
    { input: "5" },
    { input: "6" },
    { input: "-", variant: "default" },
  ],
  [
    { input: "1" },
    { input: "2" },
    { input: "3" },
    { input: "+", variant: "default" },
  ],
  [
    { input: "0", className: "flex-1 h-16" },
    { input: "," },
    { input: "=", variant: "secondary" },
  ],
];