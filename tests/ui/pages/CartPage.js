class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async removeItem(index = 0) {
    await this.cartItems.nth(index).locator('button').click();
  }
}
module.exports = { CartPage };