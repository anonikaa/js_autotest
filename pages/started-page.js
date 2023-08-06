const { expect } = require("@playwright/test");

exports.StartedPage = class StartedPage {
  constructor(page) {
    this.page = page;
    this.iframe = page.frameLocator('iframe[title="Donate Button"]');
    this.giveNowButton = this.iframe.locator(
      'div[data-qa="donate-button-label"]'
    );
  }

  async goto() {
    await this.page.goto("https://data.fundraiseup.com/qa-test-7R58U3/");
    await expect(this.giveNowButton).toBeVisible();
  }

  async clickGiveNowButton() {
    await this.giveNowButton.click();
  }
};
