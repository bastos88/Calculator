import { useContext } from 'react';
import { Card } from './Card';
import { Text } from './Text';
import { CalculatorContext } from '../contexts/CalculatorContext';

export function OperationHistory() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('OperationHistory must be used within CalculatorProvider');
  }

  const { history } = context;

  return (
    <Card className="w-full py-10 px-8 max-h-[500px] overflow-y-auto">
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Text>

      {history.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {history.map((item, index) => (
            <Text key={`item-${index}`} as="li" className="break-all">
              {item}
            </Text>
          ))}
        </ul>
      ) : (
        <Text as="p" variant="muted">Nenhuma operação recente.</Text>
      )}
    </Card>
  );
}