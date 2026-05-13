Desafio Técnico: QA Automation (UI & API)
Este repositório contém a automação de testes para a plataforma de e-commerce Sauce Demo (UI) e para a API de reservas Restful-Booker (API), utilizando o framework Playwright com JavaScript.

🚀 Tecnologias Utilizadas
Linguagem: JavaScript  

Framework de Teste: Playwright  

Relatórios: Playwright HTML Reporter  

Documentação: Markdown  

📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Node.js (Versão 18 ou superior recomendada)

VS Code (Opcional, mas recomendado)

🛠️ Instalação e Configuração
Clone o repositório:

Bash
git clone https://github.com/jhonatanscastro/playwright-saucedemo-booker
cd seu-repositorio
Instale as dependências do projeto:

Bash
npm install
Instale os navegadores do Playwright:

Bash
    npx playwright install
    ```

## 🏃 Executando os Testes

Você pode executar os testes de diferentes formas:

*   **Executar todos os testes (UI + API) em modo Headless:**
    ```bash
    npx playwright test
    ```

*   **Executar apenas testes de UI:**
    
```bash
    npx playwright test tests/ui/
    ```

*   **Executar apenas testes de API:**
    
```bash
    npx playwright test tests/api/
    ```

*   **Executar em modo UI (Interface Gráfica do Playwright):**
    
```bash
    npx playwright test --ui
    ```

## 📊 Relatórios e Evidências
Após a execução dos testes, um relatório detalhado é gerado automaticamente. Para visualizá-lo, utilize o comando:
```bash
npx playwright show-report
As evidências de falhas (screenshots e vídeos) estarão anexadas diretamente no relatório HTML caso ocorra algum erro durante a execução.  

📂 Estrutura do Projeto
Plaintext
├── docs/               # Documentação estratégica e Plano de Testes
├── tests/
│   ├── ui/             # Scripts de automação Sauce Demo
│   └── api/            # Scripts de automação Restful-Booker
├── playwright.config.js # Configurações globais do framework[cite: 1]
└── package.json        # Dependências e scripts do projeto
🧠 Premissas e Decisões Técnicas
Linguagem: Optou-se por JavaScript pela agilidade no setup e ampla compatibilidade[cite: 1].

API Testing: Os testes de API foram integrados ao Playwright para centralizar a stack tecnológica e facilitar a execução em CI/CD[cite: 1].

Estratégia de Dados: Para a API, os dados de reserva são criados e deletados dinamicamente para garantir a independência dos testes.  

Desenvolvido por Jhonatan - QA Engineer