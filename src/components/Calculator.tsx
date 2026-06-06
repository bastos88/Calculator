import { useState, useContext } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorContext } from '../contexts/CalculatorContext';
import { buttons } from '../constants/buttons';

export function Calculator() {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('Calculator must be used within CalculatorProvider');
  }

  const { updateHistory } = context;

  function handleInputClick(input: string) {
    if (input === "C") {
      setOperation("");
      setResult("");
      return;
    }
    
    if (input === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }
    
    if (result) {
      setOperation(isNaN(Number(input)) ? `${result}${input}` : input);
      setResult("");
      return;
    }

    if (input === "=") {
      try {
        const cleanOperation = operation.replace(/\s/g, "");
        const operationResult = eval(cleanOperation.replace(/,/g, "."));
        const parsedResult = operationResult.toLocaleString("pt-PT");
        setResult(parsedResult);
        updateHistory(operation, parsedResult);
      } catch (error) {
        setResult("Erro");
      }
      return;
    }
    
    if (input === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }
    
    setOperation(prev => `${prev}${input}`);
  }

  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        {buttons.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex gap-3">
            {row.map((button) => (
              <Button
                key={button.input}
                className={button.className || "w-16 h-16"}
                variant={button.variant}
                onClick={() => handleInputClick(button.input)}
              >
                {button.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}