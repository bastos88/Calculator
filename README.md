# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# 🧮 Calculadora React com TypeScript

Uma calculadora moderna e elegante desenvolvida com React, TypeScript e Tailwind CSS. O projeto possui duas versões disponíveis em diferentes branches.

## 📚 Versões Disponíveis

### 🌿 Branch `main` (v1.0.0) - Versão Monolítica
- Código em um único arquivo
- Implementação simples e direta
- Ideal para entender a lógica básica
- Arquivo principal: `App.js` com toda a calculadora

### 🌿 Branch `component-version` (v2.0.0) - Versão Componentizada
- Arquitetura modular com componentes separados
- Código mais organizado e reutilizável
- Melhor manutenibilidade
- Histórico de operações com localStorage
- Context API para gerenciamento de estado

## ✨ Funcionalidades (Ambas versões)

- ➕ Operações básicas (adição, subtração, multiplicação, divisão)
- 🧹 Botões CE (limpar entrada) e C (limpar tudo)
- 📱 Design responsivo
- 🎨 Interface moderna com gradientes e sombras
- 🔄 Formatação de números no padrão português (pt-PT)

## ✨ Funcionalidades Exclusivas da Versão Componentizada

- 📝 Histórico de operações salvo localmente
- 💾 Persistência de dados com localStorage
- 🎯 Componentes reutilizáveis (Button, Card, Text)
- 🔧 Context API para estado global

## 🚀 Tecnologias Utilizadas

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 📁 Estrutura do Projeto (Versão Componentizada)



src/
├── components/
│ ├── Button.tsx # Botão reutilizável
│ ├── Calculator.tsx # Componente principal
│ ├── CalculatorDisplay.tsx # Display da calculadora
│ ├── Card.tsx # Container estilizado
│ ├── OperationHistory.tsx # Histórico de operações
│ └── Text.tsx # Texto estilizado
├── constants/
│ └── buttons.ts # Configuração dos botões
├── contexts/
│ └── CalculatorContext.tsx # Contexto global
├── types/
│ └── index.ts # Interfaces TypeScript
├── App.tsx
└── main.tsx




## 🛠️ Como executar

### Clonar o repositório

```
git clone https://github.com/SEU-USER/calculadora.git
cd calculadora
```

```
git checkout main
npm install
npm run dev
```


# Ver todas as branches
```
git branch -a
```

# Mudar para versão monolítica
```
git checkout main
```

# Mudar para versão componentizada
```
git checkout component-version
```


🎨 Design
Cores
Background: #2d2a37

Primary: #462878

Secondary: #db5524

Text: #ebebeb

Efeitos
Sombra personalizada (shadow-custom)

Gradientes em botões (bg-gradient-custom)

Efeito hover (bg-gradient-hover)

📱 Responsividade
Desktop: Layout horizontal (calculadora + histórico lado a lado)

Mobile: Layout vertical empilhado

🏷️ Tags e Releases
bash
# Tags disponíveis
```
git tag v1.0.0    # Versão monolítica
git tag v2.0.0    # Versão componentizada
```
🤝 Como contribuir
Faça um fork do projeto

Escolha a branch apropriada:

```
git checkout main  # ou component-version
Crie uma branch para sua feature:
```
```
git checkout -b feature/nova-feature
Commit suas mudanças:
```
```
git commit -m 'feat: add nova feature'
Push para a branch:
```
```
git push origin feature/nova-feature
Abra um Pull Request
```

📊 Roadmap
Temas claro/escuro

Teclado suporte

Operações científicas

Testes unitários

PWA para instalação

📄 Licença
MIT © [Seu Nome]

👨‍💻 Autor
Seu Nome - @SEU-GITHUB

🙏 Agradecimentos
Inspirado em designs modernos de calculadoras

Tailwind CSS pela facilidade de estilização

Comunidade React pela excelente documentação

📖 Histórico de Versões
v2.0.0 (component-version) - Atual
Arquitetura componentizada

Histórico de operações

localStorage persistence

Context API

v1.0.0 (main) - Legado
Versão inicial

Código em arquivo único

Funcionalidades básicas

⭐️ Deixe uma estrela se este projeto foi útil para você!

🐛 Reporte bugs através das issues

💡 Sugira melhorias através das discussions
