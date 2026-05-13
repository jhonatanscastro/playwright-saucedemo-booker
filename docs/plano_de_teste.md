
# 📋 Plano de Testes: Desafio QA (UI & API)

## 1. Introdução

Este documento descreve a estratégia de testes adotada pata validar a plataforma **Sauce Demo** e a API **Restful-Booker**, garantindo que as funcionalidades principais operem conforme o esperado e identificando potenciais riscos à qualidade do produto.

## 2. Escopo dos Testes

### 💻 UI Testing (Sauce Demo)

* **Autenticação:** Validar login com diferentes perfis (standard, locked_out).


* **Gestão de Produtos:** Validar ordenação por preço e nome.


* **Carrinho:** Adicionar e remover itens, validando o contador (badge).


* **Checkout:** Validar o fluxo completo de compra até a tela de confirmação.



### 🔌 API Testing (Restful-Booker)

* **Autenticação:** Geração de token para acessos privados.


* **CRUD de Reservas:** Criar, consultar, atualizar e excluir reservas.


* **Validação de Dados:** Verificar status codes e integridade do JSON retornado.



---

## 3. Cenários de Teste (Matriz de Rastreabilidade)

| ID | Componente | Descrição do Cenário | Resultado Esperado |
| --- | --- | --- | --- |
| **CT-01** | UI | Login com usuário válido | Acesso à página de inventário.

 |
| **CT-02** | UI | Ordenação de produtos "Low to High" | O primeiro item deve ser o de $7.99.

 |
| **CT-03** | UI | Fluxo de checkout completo | Mensagem "Thank you for your order!".

 |
| **CT-04** | API | POST /auth com dados válidos | Retorno de um token de autenticação.

 |
| **CT-05** | API | DELETE /booking/{id} com token | Status Code 201 (Created/Success).

 |

---

## 4. Análise de Riscos

* **Risco Técnico:** A API Restful-Booker é um ambiente compartilhado; dados podem ser apagados por outros usuários simultaneamente.


* **Mitigação:** Os testes de API criam sua própria massa de dados dinamicamente antes de cada validação.


* **Risco de UX:** O sistema Sauce Demo não valida o formato do CEP no checkout, permitindo caracteres especiais.



---

## 5. Sugestões de Melhorias

* **Acessibilidade:** Implementar tags `aria-label` nos botões de "Add to cart" para melhorar a navegação via leitores de tela.


* **Performance (API):** Implementar cache para consultas de listagem de reservas (`GET /booking`) para reduzir a carga no servidor.


* **UI:** Adicionar uma confirmação visual (toast message) ao remover um item do carrinho, aumentando o feedback ao usuário.



---

## 6. Ferramentas e Ambiente

* **Framework:** Playwright (JavaScript).


* **Evidências:** Screenshots e vídeos gerados automaticamente em caso de falha.


* **Report:** Playwright HTML Reporter para visualização dos resultados.