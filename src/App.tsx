import { CalculatorProvider } from './contexts/CalculatorContext';
import { Calculator } from './components/Calculator';
import { OperationHistory } from './components/OperationHistory';

function App() {
  return (
    <main className="py-28 px-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-8 max-w-6xl mx-auto">
      <CalculatorProvider>
        <Calculator />
        <OperationHistory />
      </CalculatorProvider>
    </main>
  );
}

export default App;