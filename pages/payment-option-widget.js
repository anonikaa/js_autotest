const { expect } = require("@playwright/test");

exports.PaymentOptionWidget = class PaymentOptionWidget {
  constructor(page) {
    this.iframe = page.frameLocator('iframe[title="Donation Widget"]');
    this.coverTransactionCostsCheckbox = this.iframe.locator(
      'button[data-qa="cover-fee-checkbox"]'
    );
    this.creditCardButton = this.iframe.locator('button[data-qa="cc-button"]');
  }

  async uncheckCoverTransactionCostCheckbox() {
    await this.coverTransactionCostsCheckbox.uncheck();
    await expect(this.coverTransactionCostsCheckbox).not.toBeChecked();
  }
  async clickCreditCardButton() {
    await this.creditCardButton.click();
  }
};
