const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');
const { CartPage } = require('./pages/CartPage');
const { CheckoutPage } = require('./pages/CheckoutPage');
const { USERS, CHECKOUT_DATA, UI_CONFIG } = require('../data/constants');

test.describe('Sauce Demo - Testes dos fluxos principais de UI e e2e ', () => {
  let loginPage, productsPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    
    // O método goto já utiliza a URL das constantes internamente
    await loginPage.goto();
  });

  test('Cenário 01: Autenticação com múltiplos usuários', async ({ page }) => {
    // Validação de Usuário Bloqueado
    await loginPage.login(USERS.LOCKED.username, USERS.LOCKED.password);
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
    
    // Validação de Usuário Padrão
    await page.reload();
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    await expect(page).toHaveURL(`${UI_CONFIG.BASE_URL}/inventory.html`);
  });

  test('Cenário 02: Ordenação, Gestão de Produtos e Remoção do Carrinho', async () => {
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    
    // Ordenação e Filtro
    await productsPage.sortBy('lohi');
    const prices = await productsPage.inventoryItems.locator('.inventory_item_price').allInnerTexts();
    expect(prices[0]).toBe('$7.99');

    // Gestão do Carrinho e Remoção de Itens
    await productsPage.addItemToCart(0);
    await expect(productsPage.cartBadge).toHaveText('1');
    await productsPage.cartLink.click();
    await cartPage.removeItem(0);
    await expect(productsPage.cartBadge).not.toBeVisible();
  });

  test('Cenário 03: Fluxo Completo de Compra e Logout', async ({ page }) => {
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    await productsPage.addItemToCart(0);
    await productsPage.cartLink.click();
    await cartPage.checkoutButton.click();
    
    // Checkout com massa de dados centralizada
    await checkoutPage.fillInformation(
      CHECKOUT_DATA.firstName, 
      CHECKOUT_DATA.lastName, 
      CHECKOUT_DATA.postalCode
    );
    await checkoutPage.finishPurchase();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');

    // Navegação e Logout
    await expect(page).toHaveURL(`${UI_CONFIG.BASE_URL}/checkout-complete.html`);
  });
});