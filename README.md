# Automacao E2E com Cypress - E-commerce

## Sobre
Este projeto demonstra uma estrategia de testes ponta a ponta para um aplicativo de e-commerce usando Cypress.

## Estrategia de teste
- Foco em jornadas criticas do usuario
- Cenarios positivos e negativos
- Separacao por camadas (specs, pages, commands e utils)
- Execucao em CI com GitHub Actions

## Tecnologias
- Cypress
- JavaScript
- Mochawesome

## Fluxos cobertos
- Login
- Adicionar produto ao carrinho
- Finalizar compra (checkout completo)
- Testes de API (exemplo com `cy.request`)
- Testes basicos de performance (API e carregamento de pagina)
- Testes basicos de seguranca (controle de acesso e XSS no login)

## Requisitos para rodar na maquina local
- `Node.js` LTS (recomendado: versao 20 ou superior)
- `npm` (instalado junto com Node.js)
- Git (opcional, para clonar o repositorio)

## Instalacao e configuracao do projeto
1. Clone o repositorio:
   ```bash
   git clone <https://github.com/recueroana/cypress-ecommerce-e2e-automation>
   ```
2. Entre na pasta do projeto:
   ```bash
   cd cypress-ecommerce-e2e-automation
   ```
3. Instale as dependencias:
   ```bash
   npm install
   ```
4. (Opcional, recomendado) Verifique se o binario do Cypress foi instalado corretamente:
   ```bash
   npx cypress verify
   ```

## Como executar os testes
### Abrir interface do Cypress (modo interativo)
```bash
npm run test:open
```

### Rodar em modo headless
```bash
npm run test:headless
```

### Rodar suite completa com reporter
```bash
npm test
```

### Rodar somente testes de performance
```bash
npm run test:performance
```

### Rodar somente testes de seguranca
```bash
npm run test:security
```

### Gerar relatorio consolidado
```bash
npm run test:report
```

O relatorio final e salvo em `cypress/reports`.

## Configuracao de ambiente
O projeto usa por padrao:
- `baseUrl`: `https://www.saucedemo.com`

Para sobrescrever a URL base na sua maquina, execute com variavel de ambiente:

```bash
BASE_URL=https://seu-endereco npm test
```

No PowerShell (Windows), use:

```powershell
$env:BASE_URL="https://seu-endereco"; npm test
```

## Estrutura principal
- `cypress/e2e`: cenarios de teste (UI e API)
- `cypress/support/pages`: Page Objects
- `cypress/support/commands.js`: comandos customizados
- `cypress/support/utils`: factories e validacoes
- `cypress/fixtures`: dados fixos de teste

## Criterios atuais de performance
Os testes de performance iniciais validam:
- Tempo de resposta da requisicao HTTP (threshold de `1200ms`)
- Tempo de carregamento da pagina inicial (threshold de `4000ms`)

No teste de API/performance, a rota utilizada esta em `cypress/e2e/performance.cy.js` (a rota `/inventory` pode retornar `404` publicamente no Saucedemo).

## CI/CD
Os testes sao executados automaticamente no GitHub Actions (`.github/workflows/tests.yml`).

## Criterios atuais de seguranca
Os testes de seguranca atuais validam:
- Controle de acesso: pagina de inventario não deve liberar acesso sem login
- Credenciais inválidas: não deve permitir cair em página logada
- XSS básico no formulário de login: não deve disparar `window.alert`