class ProductsPage {
  constructor(page) {
    this.page = page;
    this.sortContainer = page.locator('.product_sort_container');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async sortBy(option) {
    await this.sortContainer.selectOption(option);
  }

  async addItemToCart(index = 0) {
    await this.inventoryItems.nth(index).locator('button').click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
module.exports = { ProductsPage };