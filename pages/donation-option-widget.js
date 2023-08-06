const { expect } = require("@playwright/test");

exports.DonationOptionWidget = class DonationOptionWidget {
  constructor(page) {
    this.iframe = page.frameLocator('iframe[title="Donation Widget"]');
    this.monthlyButton = this.iframe.locator(
      'button[data-qa="more-frequent-button"]'
    );
    this.donateMonthlyButton = this.iframe.locator(
      'button[data-qa="donate-button"]'
    );
    this.priceInput = this.iframe.locator('input[data-qa="amount"]');
    this.currencySelector = this.iframe.locator(
      'select[data-qa="currency-selector"]'
    );
  }

  async clickMonthlyButton() {
    await this.monthlyButton.click();
    await expect(this.donateMonthlyButton).toBeVisible();
  }

  async chooseUSDCurrency() {
    await this.currencySelector.click();
    await this.currencySelector.selectOption("USD");
  }
  async inputPrice(price) {
    await this.priceInput.fill(price);
  }
  async clickDonateMonthlyButton() {
    await this.donateMonthlyButton.click();
  }
};
