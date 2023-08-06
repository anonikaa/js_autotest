const { expect } = require("@playwright/test");

exports.CreditCardWidget = class CreditCardWidget {
  constructor(page) {
    this.iframe = page.frameLocator('iframe[title="Donation Widget"]');
    this.cardNumberIframe = this.iframe.frameLocator(
      'iframe[title="Secure card number input frame"]'
    );
    this.creditCardInput =
      this.cardNumberIframe.getByPlaceholder("Card number");

    this.expireDateIframe = this.iframe.frameLocator(
      'iframe[title="Secure expiration date input frame"]'
    );
    this.expiredDateInput = this.expireDateIframe.getByPlaceholder("MM / YY");

    this.cvcIframe = this.iframe.frameLocator(
      'iframe[title="Secure CVC input frame"]'
    );
    this.cvcInput = this.cvcIframe.getByPlaceholder("CVC");

    this.continueButton = this.iframe.locator(
      'button[data-qa="card-continue"]'
    );
    this.declinedCardErrorTooltip = this.iframe.locator(
      'p[data-qa="card-continue-error-title"]'
    );
  }
  //в названиях было бы неплохо указать валидные это данные или нет, но у меня нет такой информации
  async inputCreditCardNumber(cardNumber) {
    await this.creditCardInput.fill(cardNumber);
  }
  async inputExpireCardDate(expireDate) {
    await this.expiredDateInput.fill(expireDate);
  }
  async inputCvc(cvc) {
    await this.cvcInput.fill(cvc);
  }
  async cickContinueButton() {
    await this.continueButton.click();
  }
  async getCardDeclineError() {
    await expect(this.declinedCardErrorTooltip).toBeVisible();
  }
};
