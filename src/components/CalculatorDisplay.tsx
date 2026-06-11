import { Text } from './Text';
import type { CalculatorDisplayProps } from '../types';

export function CalculatorDisplay({ operation, result }: CalculatorDisplayProps) {
  return (
    <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
      <Text
        as="div"
        variant="muted"
        className="flex items-center justify-end h-7"
      >
        {result && operation}
      </Text>
      <div className="flex items-center justify-between h-9">
        <Text variant="muted">=</Text>
        <Text variant="blast" className="text-right w-full font-mono">
          {result || operation || '0'}
        </Text>
      </div>
    </div>
  );
}