# Fitness AI Frontend

Uma aplicação React moderna para gestão de fitness com integração completa à API Fitness AI.

## 🚀 Funcionalidades

- **Autenticação de utilizadores** com JWT
- **Gestão de treinos** personalizados
- **Calendário de exercícios** interativo
- **Biblioteca de exercícios** com filtros avançados
- **Dashboard de bem-estar** com métricas
- **Configurações de utilizador** completas
- **Interface responsiva** com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework frontend
- **Redux Toolkit** - Gestão de estado
- **React Router** - Navegação
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Estilização
- **React Calendar** - Componente de calendário
- **React Chart.js** - Gráficos e visualizações
- **React Icons** - Ícones

## 🔧 Configuração e Instalação

### 1. Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### 2. Instalação
```bash
# Navegar para a pasta do frontend
cd fitness_ai_frontend

# Instalar dependências
npm install
```

### 3. Configuração de Ambiente
```bash
# Copiar ficheiro de exemplo
cp .env.example .env

# Editar .env com as suas configurações
# REACT_APP_API_URL=http://localhost:3500
```

### 4. Executar a Aplicação
```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── features/           # Features organizadas por domínio
│   ├── auth/          # Autenticação
│   ├── exercises/     # Exercícios
│   ├── workouts/      # Treinos
│   ├── calendar/      # Calendário
│   └── userSettings/  # Configurações
├── pages/             # Páginas principais
├── hooks/             # Hooks personalizados
├── config/            # Configurações
├── UI/                # Componentes de UI
└── assets/            # Recursos estáticos
```

## 🔄 Correções Implementadas

### Problemas Corrigidos:
1. **URLs hardcoded** → Configuração centralizada da API
2. **Componente ExerciseList malformado** → JSX corrigido e melhorado
3. **Endpoint de login incorreto** → Endpoint correto implementado
4. **Falta de autenticação** → Headers de autenticação adicionados
5. **Gestão de erros inconsistente** → Error Boundary e hook useApi
6. **Falta de variáveis de ambiente** → Configuração .env implementada

### Melhorias Adicionadas:
- Hook personalizado `useApi` para chamadas à API
- Componente `ErrorBoundary` para tratamento de erros
- Configuração centralizada em `config/api.js`
- Tratamento de loading e error states
- Headers de autenticação padronizados

## 🧪 Como Testar

1. **Iniciar o backend** (porta 3500)
2. **Iniciar o frontend** (porta 3000)
3. **Criar um utilizador** ou fazer login
4. **Navegar pelas funcionalidades**

## 📝 Notas Técnicas

- **Autenticação**: JWT tokens armazenados no Redux store
- **Estado global**: Gerido com Redux Toolkit
- **Estilização**: Tailwind CSS com configuração personalizada
- **Responsividade**: Design mobile-first
